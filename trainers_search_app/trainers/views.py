from django.db.models import Q
from rest_framework import generics
from .models import Trainer
from .serializer import TrainerSerializer

class ListCreateTrainersView(generics.ListCreateAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer

    def get_queryset(self):
        queryset = Trainer.objects.all()
        
        name = self.request.query_params.get('name')
        location = self.request.query_params.get('location')
        technology = self.request.query_params.get('technology')

        if name:
            queryset = queryset.filter(name_icontains=name)
        if location:
            queryset = queryset.filter(place_icontains=location)
        if technology:
            queryset = queryset.filter(
                Q(technology1__icontains=technology) | Q(technology2__icontains=technology)
            )
        return queryset


class RetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer
