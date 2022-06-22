from rest_framework import routers
from VHSER_MODULE.views import *


router = routers.DefaultRouter()
router.register('organisation',VhserOrganisationView,basename='service_organisation')
router.register('services',VhserServiceView,basename='service_type')