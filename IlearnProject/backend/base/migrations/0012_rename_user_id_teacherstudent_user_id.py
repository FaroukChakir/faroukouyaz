# Generated by Django 3.2.4 on 2021-06-30 15:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_rename_userid_teacherstudent_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='teacherstudent',
            old_name='User_Id',
            new_name='User_id',
        ),
    ]