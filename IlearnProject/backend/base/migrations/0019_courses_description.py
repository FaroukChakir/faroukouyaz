# Generated by Django 3.2.4 on 2021-07-02 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0018_alter_courses_categorie'),
    ]

    operations = [
        migrations.AddField(
            model_name='courses',
            name='Description',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
