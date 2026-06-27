selenium

here we need webdriver to interact with browser

webdriver.Chrome()

open a site:
driver.get(url)

elements:
find_element- find one
find_elements-find many

find_element(by.name/id/class_name/tag_name/cass_selector/xpath,"")

actions

send_keys() -> write answers
clear()
click()

wait -> no auto wait here

driver.implicitly_wait(10) - wait for 10 secs without any condition 

explicit wait -based on condition on. elemen -poillug 500 ms
wait = WebDriverWait(driver, 10)
element = wait.until(EC.presence_of_element_located((By.ID, "element_id")))

fluent wait -polls based on user values ,ignore exceptio 

frame
switch_to_frame
switch_to_default_content
switch_to_window

screenshots
driver.save_screenshot("screenshot.png")

dropdowns
using select
select.selectbyvisibletext
select.sele

alerts

switchtoalerts

browser 
options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(options=options)
