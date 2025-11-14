from django.db.models import Q
from rest_framework import generics
from .models import Trainer
from .serializer import TrainerSerializer

from rest_framework.permissions import IsAuthenticated  #secure 

class ListCreateTrainersView(generics.ListCreateAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Trainer.objects.all()
        
        name = self.request.query_params.get('name')
        location = self.request.query_params.get('place')
        technology = self.request.query_params.get('technology')

        if name:
            queryset = queryset.filter(name__icontains=name)
        if location:
            queryset = queryset.filter(place__icontains=location)
        if technology:
            queryset = queryset.filter(
                Q(technology1__icontains=technology) | Q(technology2__icontains=technology)
            )
        return queryset


class RetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer
    permission_classes = [IsAuthenticated]
