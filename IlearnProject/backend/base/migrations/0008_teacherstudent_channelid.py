# Generated by Django 3.2.4 on 2021-06-30 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_alter_courses_class_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacherstudent',
            name='ChannelId',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
