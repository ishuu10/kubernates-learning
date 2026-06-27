kubernates is orchestation and its open source

developed by google

it basically manages containers in cloud ,on prem

like if you 100 containers ,how can we run ??


analogy:

Containers = delivery boys carrying food (your app)
pods  the smallest, most basic deployable unit of computing that you can create and manage
Nodes = bikes/vehicles (machines/VMs)
Cluster = entire delivery fleet
Kubernetes = control office managing everything

The control office:

assigns deliveries
replaces sick delivery boys
balances work
tracks health
scales when orders increase

Control panel

Api server
- receptionist/front desk.
-Entry point of Kubernetes

(Then API server updates cluster state)


etcd

Key-value database storing cluster information.
pod1 -> running
node2 -> healthy
deployment replicas -> 3

(like storing delivery boy info)

Scheduler

Scheduler decides:

"Which machine should run this pod?"

Checks:

CPU
memory
node health
taints/tolerations

Then assigns pod.

(like which deliver boy should do what )

Controller Manager

Controller notices mismatch and creates another pod. 

worker nodes :

where app actually runs 

# Kubernetes Common Issues Cheat Sheet

| Issue/Error                            | Meaning                                 | Common Reasons                                                                | How to Debug                                          | Typical Fix                             |
| -------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------- |
| `CrashLoopBackOff`                     | Container keeps crashing and restarting | App crash, wrong env vars, DB connection failure, bad config, startup failure | `kubectl logs <pod>`<br>`kubectl describe pod <pod>`  | Fix app/config/env vars, redeploy       |
| `ImagePullBackOff`                     | Kubernetes cannot pull image            | Wrong image name/tag, private registry auth issue, network issue              | `kubectl describe pod <pod>`                          | Correct image/tag, add imagePullSecret  |
| `ErrImagePull`                         | Immediate image download failure        | Image does not exist, registry unreachable                                    | `kubectl describe pod <pod>`                          | Verify image and registry               |
| `Pending`                              | Pod not scheduled yet                   | No CPU/RAM, node taints, PVC/storage missing                                  | `kubectl describe pod <pod>`                          | Add resources/nodes, fix taints/storage |
| `OOMKilled`                            | Container exceeded memory limit         | Memory leak, low memory limit                                                 | `kubectl describe pod <pod>`                          | Increase memory limit or optimize app   |
| `Node NotReady`                        | Worker node unhealthy                   | Kubelet down, disk full, network issue                                        | `kubectl get nodes`<br>`kubectl describe node <node>` | Restart kubelet, free disk, fix network |
| `ContainerCreating` stuck              | Pod waiting to start                    | Volume mount issue, image pull delay, CNI/network issue                       | `kubectl describe pod <pod>`                          | Fix storage/network/image access        |
| `CreateContainerConfigError`           | Pod config invalid                      | Missing ConfigMap/Secret, wrong env refs                                      | `kubectl describe pod <pod>`                          | Create/fix ConfigMap or Secret          |
| `CreateContainerError`                 | Container failed before start           | Wrong command, invalid mount path                                             | `kubectl logs <pod>`                                  | Fix startup command/config              |
| `Evicted`                              | Pod removed from node                   | Node low on memory/disk                                                       | `kubectl describe pod <pod>`                          | Free resources or scale cluster         |
| `RunContainerError`                    | Runtime failed starting container       | Invalid entrypoint/script failure                                             | `kubectl logs <pod>`                                  | Fix container startup script            |
| `Completed`                            | Pod finished successfully               | Normal for batch/cron jobs                                                    | `kubectl get pod`                                     | No action needed                        |
| `Terminating` stuck                    | Pod not deleting                        | Finalizer issue, volume/network stuck                                         | `kubectl describe pod <pod>`                          | Force delete pod                        |
| `Back-off restarting failed container` | Kubernetes slowing restart attempts     | Repeated crashes                                                              | `kubectl logs <pod>`                                  | Fix root application issue              |
| Readiness Probe Failed                 | Pod running but not ready for traffic   | App endpoint failing                                                          | `kubectl describe pod <pod>`                          | Fix health endpoint                     |
| Liveness Probe Failed                  | Kubernetes thinks app is dead           | Slow app, bad healthcheck                                                     | `kubectl describe pod <pod>`                          | Adjust probe timing/endpoint            |
| `FailedScheduling`                     | Scheduler cannot place pod              | Resource shortage, affinity rules                                             | `kubectl describe pod <pod>`                          | Add capacity or relax rules             |
| DNS Resolution Failure                 | Service discovery broken                | CoreDNS issue, wrong service name                                             | `nslookup service-name` inside pod                    | Restart CoreDNS/fix service             |
| PVC Pending                            | Storage claim not fulfilled             | No storage class or PV                                                        | `kubectl get pvc`                                     | Create PV/storage class                 |
| API Server Unreachable                 | Cluster control plane issue             | API server down/network issue                                                 | `kubectl cluster-info`                                | Restart API server/network fix          |

---

# Most Important Errors for Interviews

If interviewer asks:

> "What Kubernetes issues have you debugged?"

Mention these first:

1. `CrashLoopBackOff`
2. `ImagePullBackOff`
3. `Pending`
4. `OOMKilled`
5. Probe failures
6. `Node NotReady`

---

# Golden Debugging Flow

Whenever pod fails:

```bash
kubectl get pods
kubectl describe pod <pod>
kubectl logs <pod>
```

These 3 commands solve most beginner/intermediate Kubernetes issues.

---

# Quick Difference Confusion

| Error                        | Main Problem                 |
| ---------------------------- | ---------------------------- |
| `CrashLoopBackOff`           | App starts then crashes      |
| `ImagePullBackOff`           | Image itself cannot download |
| `Pending`                    | Pod never got machine/node   |
| `OOMKilled`                  | Memory exceeded              |
| `ContainerCreating`          | Startup dependencies stuck   |
| `CreateContainerConfigError` | Bad Kubernetes config        |


kubectl -only cli for interacting 

cluster internal ip 
nodeport-exposes ip external
loadbalance