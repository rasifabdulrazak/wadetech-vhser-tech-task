from django.db import models

# Create your models here.


class VHSER_MODULE(models.Model):
    module_name = models.CharField(max_length=50)

    def __str__(self):
        return self.module_name

class VHSER_NEXT_ID(models.Model):
    next_id = models.IntegerField()
    module_id = models.ForeignKey(VHSER_MODULE,on_delete=models.CASCADE)

class VHSER_ORGANISATION(models.Model):
    org_name = models.CharField(max_length=50)
    org_logo = models.CharField(max_length=100)

class VHSER_VEHICLE(models.Model):
    vehicle_name = models.CharField(max_length = 50)
    vehicle_model = models.CharField(max_length = 50)
    client_name = models.CharField(max_length = 50,null=True)
    client_mobile = models.CharField(max_length = 20)
    vehicle_number = models.CharField(max_length = 25)

class VHSER_SERVICE(models.Model):
    service_type = models.CharField(max_length = 50)
    service_amount = models.FloatField()

class VHSER_SERVICE_RECIEPT(models.Model):
    reciept_no = models.CharField(max_length = 50)
    org_id = models.ForeignKey(VHSER_ORGANISATION,on_delete=models.CASCADE)
    vehicle_id = models.ForeignKey(VHSER_VEHICLE,on_delete=models.CASCADE)
    recpt_date = models.DateTimeField(auto_now_add = True)
    recpt_amount = models.FloatField()

class VHSER_SERVICE_RECIPTDTLS(models.Model):
    recpt_id = models.ForeignKey(VHSER_SERVICE_RECIEPT,on_delete=models.CASCADE)
    service_id = models.ForeignKey(VHSER_SERVICE,on_delete=models.CASCADE)
    recpt_det_srvc_amt = models.FloatField()