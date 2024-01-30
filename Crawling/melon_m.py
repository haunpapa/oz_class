from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import time


options = Options()

user = "Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36 Edg/121.0.0.0"
options.add_argument('user-agent=' + user)
#화면  자동 종료 해제 옵션
options.add_experimental_option("detach",True)
options.add_experimental_option("excludeSwitches",["enable-automation"])
driver = webdriver.Chrome(options=options)

#크롤링 코드 작성
url = "https://m2.melon.com/index.htm"
driver.get(url)
time.sleep(3)

if driver.current_url != url:
    driver.get(url)

driver.find_element(By.LINK_TEXT,"닫기").click()
time.sleep(1)

driver.find_element(By.LINK_TEXT,"멜론차트").click()
time.sleep(1)

driver.find_elements(By.CSS_SELECTOR,"#moreBtn")[1].click()
time.sleep(1)

html = driver.page_source
soup = BeautifulSoup(html, "html.parser")

rank = soup.select(".service_list.list_music > .list_item")

num = 1
for i in rank:
    rank_song = i.select_one(".title.ellipsis")
    rank_singer = i.select_one(".name.ellipsis")
    print(f' [{num}] ')
    print(f' 가 수 : {rank_singer.text.strip()}')
    print(f' 곡 명 : {rank_song.text.strip()}')
    print()
    num += 1