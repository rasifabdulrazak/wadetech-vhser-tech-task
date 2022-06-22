from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
# Create your views here.
count = 1


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


class VhserServiceView(viewsets.ModelViewSet):
    queryset = VHSER_SERVICE.objects.all()
    serializer_class = VhserServiceSerializer


@api_view(['POST'])
def submit(request):
    global count
    print(request.data)
    vehicle = VHSER_VEHICLE.objects.create(
        vehicle_model=request.data['model'], client_name=request.data['customer'], client_mobile=request.data['number'])
    reciept = VHSER_SERVICE_RECIEPT.objects.create(reciept_no=str(count), org_id=VHSER_ORGANISATION.objects.get(
        pk=int(request.data['org'])), vehicle_id=vehicle, recpt_amount=request.data['total'])
    count += 1
    for i in request.data['services']:
        VHSER_SERVICE_RECIPTDTLS.objects.create(recpt_id=reciept, service_id=VHSER_SERVICE.objects.get(
            pk=i['id']), recpt_det_srvc_amt=i['service_amount'])
    return Response({"status": "done"})
