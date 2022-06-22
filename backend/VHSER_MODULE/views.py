from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .models import *
from .serializers import *
# Create your views here.


class VhserOrganisationView(viewsets.ModelViewSet):
    queryset = VHSER_ORGANISATION.objects.all()
    serializer_class = VhserOrganisationSerializer

class VhserModuleView(APIView):
    def post(self, request):
        serializer = VhserModuleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)