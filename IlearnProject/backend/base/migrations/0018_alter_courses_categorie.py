# Generated by Django 3.2.4 on 2021-07-02 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0017_alter_courses_categorie'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courses',
            name='categorie',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]