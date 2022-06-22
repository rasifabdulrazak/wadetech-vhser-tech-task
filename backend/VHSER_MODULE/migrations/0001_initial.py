# Generated by Django 4.0.5 on 2022-06-22 07:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VHSER_MODULE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('module_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='VHSER_ORGANISATION',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('org_name', models.CharField(max_length=50)),
                ('org_logo', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='VHSER_SERVICE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service_type', models.CharField(max_length=50)),
                ('service_amount', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='VHSER_SERVICE_RECIEPT',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reciept_no', models.CharField(max_length=50)),
                ('recpt_date', models.DateTimeField(auto_now_add=True)),
                ('recpt_amount', models.FloatField()),
                ('org_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='VHSER_MODULE.vhser_organisation')),
            ],
        ),
        migrations.CreateModel(
            name='VHSER_VEHICLE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vehicle_name', models.CharField(max_length=50)),
                ('vehicle_model', models.CharField(max_length=50)),
                ('client_name', models.CharField(max_length=50)),
                ('client_mobile', models.CharField(max_length=20)),
                ('vehicle_number', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='VHSER_SERVICE_RECIPTDTLS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recpt_det_srvc_amt', models.FloatField()),
                ('recpt_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='VHSER_MODULE.vhser_service_reciept')),
                ('service_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='VHSER_MODULE.vhser_service')),
            ],
        ),
        migrations.AddField(
            model_name='vhser_service_reciept',
            name='vehicle_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='VHSER_MODULE.vhser_vehicle'),
        ),
        migrations.CreateModel(
            name='VHSER_NEXT_ID',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('next_id', models.IntegerField()),
                ('module_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='VHSER_MODULE.vhser_module')),
            ],
        ),
    ]