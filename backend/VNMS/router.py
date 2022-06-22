from rest_framework import routers
from VHSER_MODULE.views import *


router = routers.DefaultRouter()
router.register('services',VhserOrganisationView,basename='service_organisation')