# Generated by Django 3.2.4 on 2021-06-30 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_remove_teacherstudent_channelid'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacherstudent',
            name='ChannelId',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]