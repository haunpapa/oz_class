from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.password_validation import validate_password
from rest_framework.exceptions import ParseError
from .serializers import MyInfoUserSerializer
from rest_framework.authentication import TokenAuthentication # 사용자 인증 (추가)
from rest_framework.permissions import IsAuthenticated # 권한 부여 (추가)
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
import jwt
from django.conf import settings
from config.authentication import JWTAuthentication

class Users(APIView):
    # 유저 생성 
    def post(self, request):
        password = request.data.get("password")
        serializer = MyInfoUserSerializer(data=request.data)
        
        try:
            validate_password(password) # 비밀번호 validation
        except:
            raise ParseError("Invalid password") # 오류가 났을 때 유저에게 공유

        if serializer.is_valid():
            user = serializer.save() # 새로운 유저 생성
            user.set_password(password) # 비밀번호 업데이트
            user.save() # 데이터 업데이트 후 저장

            serializer = MyInfoUserSerializer(user)
            return Response(serializer.data)
        else:
            raise ParseError(serializer.errors)
        
class MyInfo(APIView):
    authentication_classes = [TokenAuthentication] # 추가
    permission_classes = [IsAuthenticated] # 추가
    # read
    def get(self, request):
        user = request.user
        serializer = MyInfoUserSerializer(user)
        return Response(serializer.data)

    # update
    def put(self, request):
        user = request.user
        serializer = MyInfoUserSerializer(user, data=request.data, partial=True)

        if serializer.is_valid():
            user = serializer.save()
            serializer = MyInfoUserSerializer(user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
class Login(APIView):
    # 로그인
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        if not username or not password:
            raise ParseError("username and password are required")
        
        user = authenticate(request,username=username, password=password)
        
        if user :
            login(request, user)
            return Response("login success", status=status.zzHTTP_200_OK)
        else:
            return Response("login fail", status=status.HTTP_403_FORBIDDEN)
        
class Logout(APIView):
    permission_classes = [IsAuthenticated]
    # 로그아웃
    def post(self, request):
        print("request", request.headers)
        logout(request)
        return Response("logout success", status=status.HTTP_200_OK)
    
class JWTLogin(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        if not username or not password:
            raise ParseError("username and password are required")
        
        user = authenticate(request,username=username, password=password)

        if user:
            payload = {"id": user.id, "username": user.username}

            token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")

        return Response({"token": token})

class UserDetailView(APIView):
    # authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        return Response({"id": user.id, "username": user.username})
    
     