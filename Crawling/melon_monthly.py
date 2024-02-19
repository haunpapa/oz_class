import requests
from bs4 import BeautifulSoup

header_user ={"User-Agent":
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}

# 접속하고자 하는 주소 입력 => url
url = "https://www.melon.com/chart/month/index.htm"
req = requests.get(url, headers=header_user)

html = req.text
soup = BeautifulSoup(html,"html.parser")

rank = soup.find_all(class_=["lst50","lst100"])

num = 1
rank_list = []
for i in rank:
    title = i.select_one(".ellipsis.rank01 a")
    singer = i.select_one(".ellipsis.rank02 a")
    album = i.select_one(".ellipsis.rank03 a")
    rank_up = i.select_one(".up")
    if rank_up:
        print(f' [순위] {num} < {rank_up.text}상승 >')
        print(f' 제목 : {title.text}')
        print(f' 가수 : {singer.text}')
        print(f' 앨범 : {album.text}')
        print()
        num += 1
    else :
        num += 1