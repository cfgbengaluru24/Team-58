# Generated by Django 5.0.6 on 2024-07-27 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=100)),
                ('actual_content', models.TextField(max_length=10000)),
                ('time', models.TimeField()),
            ],
        ),
    ]
