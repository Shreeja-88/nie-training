from django.contrib import admin
from django.urls import path
from .views import ListCreateTrainersView, RetrieveUpdateDestroyView

urlpatterns = [
    path('trainer/', ListCreateTrainersView.as_view(), name='list-create-trainer'),
    path('trainer/<int:pk>/', RetrieveUpdateDestroyView.as_view(), name='retrieve-update-delete'),
    
]

