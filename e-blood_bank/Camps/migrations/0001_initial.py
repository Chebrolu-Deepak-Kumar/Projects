# Generated by Django 3.2 on 2021-05-03 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Camps',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('time', models.CharField(max_length=15)),
                ('campname', models.CharField(max_length=100)),
                ('address', models.TextField(max_length=150)),
                ('state', models.CharField(max_length=50)),
                ('district', models.CharField(max_length=50)),
                ('contact', models.CharField(max_length=15)),
                ('organiser', models.CharField(max_length=50)),
            ],
        ),
    ]
