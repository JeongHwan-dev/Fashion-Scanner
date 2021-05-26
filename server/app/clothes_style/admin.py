from django.contrib import admin
from .models import ClothesCategory, ClothesAttribute, Color

class ClothesCategoryAdmin(admin.ModelAdmin):
    list_display = ('category_name_en',)

class ClothesAttributeAdmin(admin.ModelAdmin):
    list_display = ('attribute_name_en',)

class ColorAdmin(admin.ModelAdmin):
    list_display = ('hex_code',)

admin.site.register(ClothesCategory, ClothesCategoryAdmin)
admin.site.register(ClothesAttribute, ClothesAttributeAdmin)
admin.site.register(Color, ColorAdmin)