from .models import *
from rest_framework import serializers


class VhserModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = VHSER_MODULE
        fields = '__all__'



class VhserNextIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = VHSER_NEXT_ID
        fields = '__all__'



class VhserOrganisationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VHSER_ORGANISATION
        fields = '__all__'



class VhserVehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = VHSER_VEHICLE
        fields = '__all__'


class VhserServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = VHSER_SERVICE
        fields = '__all__'



class VhserServiceRecieptSerializer(serializers.ModelSerializer):
    class Meta:
        model = VHSER_SERVICE_RECIEPT
        fields = '__all__'


class VhserServiceRECIPTDTLSSERIALIZER(serializers.ModelSerializer):
    class Meta:
        model = VHSER_SERVICE_RECIPTDTLS
        fields = '__all__'