from django.shortcuts import render
from django.http import HttpResponse

def show_feed(request):
	return HttpResponse("show feed")

def one_feed(request, feed_id, feed_content):
	return HttpResponse(f"feed id: {feed_id}, {feed_content}")

def all_feed(request):
	return HttpResponse("all feeds")
	# feeds = Feed.objects.all()
	# return HttpResponse("all feed")
	# return render(request, "feeds.html")
	# return render(request, "feeds.html", {"feeds":feeds, "content":"내용"})