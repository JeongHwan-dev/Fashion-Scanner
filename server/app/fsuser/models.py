from django.db import models
from django.utils.translation import gettext_lazy as _


class Fsuser(models.Model):
    class UserRole(models.TextChoices):
        USER = "User", _("User")
        STAFF = "Staff", _("Staff")
        SUPERUSER = "Superuser", _("Superuser")

    email = models.EmailField(unique=True, max_length=255, verbose_name="사용자 이메일")
    password = models.CharField(max_length=128, verbose_name="비밀번호")
    registered_date = models.DateTimeField(auto_now_add=True, verbose_name="등록 날짜")
    role = models.CharField(
        max_length=10,
        choices=UserRole.choices,
        default=UserRole.USER,
        verbose_name="역할",
    )

    def __str__(self):
        return f"{self.email}"

    class Meta:
        db_table = "fs_user"
        verbose_name = "사용자"
        verbose_name_plural = "사용자"
        ordering = ["registered_date"]
