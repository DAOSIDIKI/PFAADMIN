from rest_framework import serializers
from server1.models import Utilisateur
class DetailsSerializers(serializers.ModelSerializer):
    class Meta:
        model=Utilisateur
        fields="__all__"

