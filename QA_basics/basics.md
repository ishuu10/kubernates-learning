Testing 
api ,ui ,ai and mobile 

api ,appplication programmming interface 

res ,soap ,websocket ,grpc,graphq
rest-(Representational State Transfer)
SOAP (Simple Object Access Protocol) -xml

stateless -that each request needs to include all the information necessary for processing it.
client-server
unfirm interace- standard methods
Cacheability
Layered system architecture- like proxy

http -hyper text transfer protocol

graphql-open soruce query langauge for api,allows clients to request exactly the specific data they need, eliminating the problems of over-fetchin

In rest api:

head-provides meta data
options-tells what allowed like access-allow


Path parameters are used to identify a specific resource like booking/1

 are used to identify a specific resource, while query parameters are used to sort, 
 
filter, or paginate data

params:{
    page:1
}

mobile -appium and excode 

idempotent- same result irrespective of much times we called


genai 

large learning models 
RAG -Retrieval-Augmented Generation

deepval ,ragas 



try to use id ,class ,text,label ro data test id 

alwyas use relative xpath 
dont sue absolute 

//input
//label

//div[@id='test']
//div[text()='hai']
//div[contains(text(),'hai')]
//div[starts-with(@id,'login')]

<div class="form">
   <input type="text">
</div>

//div/input
//input/parent::div


<label>Email</label>
<input type="text">

//label/following-sibling::input
