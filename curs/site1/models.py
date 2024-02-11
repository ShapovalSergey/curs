from django.db import models


class Chapter(models.Model):
    name = models.CharField(db_column='Name', max_length=30)  # Field name made lowercase.
    id_chap = models.AutoField(db_column='Id_chap', primary_key=True)  # Field name made lowercase. The composite primary key (Id_chap, Id_conc_disc, Id_disc) found, that is not supported. The first column is selected.
    id_conc_disc = models.ForeignKey('Concretediscipline', models.DO_NOTHING, db_column='Id_conc_disc')  # Field name made lowercase.
    id_disc = models.IntegerField(db_column='Id_disc')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Chapter'
        unique_together = (('id_chap', 'id_conc_disc', 'id_disc'),)


class Comment(models.Model):
    text = models.CharField(db_column='Text', max_length=500)  # Field name made lowercase.
    date_reg = models.DateField(db_column='Date_reg')  # Field name made lowercase.
    id_com = models.AutoField(db_column='Id_com', primary_key=True)  # Field name made lowercase. The composite primary key (Id_com, Id_forum) found, that is not supported. The first column is selected.
    id_forum = models.ForeignKey('Forum', models.DO_NOTHING, db_column='Id_forum')  # Field name made lowercase.
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='Id_user')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Comment'
        unique_together = (('id_com', 'id_forum'),)


class Concretediscipline(models.Model):
    description = models.CharField(db_column='Description', max_length=250, blank=True, null=True)  # Field name made lowercase.
    id_conc_disc = models.AutoField(db_column='Id_conc_disc', primary_key=True)  # Field name made lowercase. The composite primary key (Id_conc_disc, Id_disc) found, that is not supported. The first column is selected.
    date_reg = models.DateField(db_column='Date_reg')  # Field name made lowercase.
    id_disc = models.ForeignKey('Discipline', models.DO_NOTHING, db_column='Id_disc')  # Field name made lowercase.
    id_lec = models.ForeignKey('Lecturer', models.DO_NOTHING, db_column='Id_lec')  # Field name made lowercase.
    id_dir = models.ForeignKey('Direction', models.DO_NOTHING, db_column='Id_dir')  # Field name made lowercase.
    id_user = models.IntegerField(db_column='Id_user', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'ConcreteDiscipline'
        unique_together = (('id_conc_disc', 'id_disc'),)


class Department(models.Model):
    name = models.CharField(db_column='Name', max_length=80)  # Field name made lowercase.
    id_dep = models.AutoField(db_column='Id_dep', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Department'


class Difficulty(models.Model):
    name = models.CharField(db_column='Name', max_length=30)  # Field name made lowercase.
    id_diff = models.AutoField(db_column='Id_diff', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Difficulty'


class Direction(models.Model):
    name = models.CharField(db_column='Name', max_length=60)  # Field name made lowercase.
    id_dir = models.AutoField(db_column='Id_dir', primary_key=True)  # Field name made lowercase.
    id_dep = models.ForeignKey(Department, models.DO_NOTHING, db_column='Id_dep')  # Field name made lowercase.
    id_fac = models.ForeignKey('Faculty', models.DO_NOTHING, db_column='Id_fac')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Direction'


class Discipline(models.Model):
    name = models.CharField(db_column='Name', max_length=80)  # Field name made lowercase.
    id_disc = models.AutoField(db_column='Id_disc', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Discipline'


class Faculty(models.Model):
    name = models.CharField(db_column='Name', max_length=80)  # Field name made lowercase.
    id_fac = models.AutoField(db_column='Id_fac', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Faculty'


class Forum(models.Model):
    name = models.CharField(db_column='Name', max_length=50)  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=200, blank=True, null=True)  # Field name made lowercase.
    date_reg = models.DateField(db_column='Date_reg')  # Field name made lowercase.
    id_forum = models.AutoField(db_column='Id_forum', primary_key=True)  # Field name made lowercase.
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='Id_user')  # Field name made lowercase.
    id_conc_disc = models.ForeignKey(Concretediscipline, models.DO_NOTHING, db_column='Id_conc_disc')  # Field name made lowercase.
    id_disc = models.IntegerField(db_column='Id_disc', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Forum'


class Lecturer(models.Model):
    id_lec = models.AutoField(db_column='Id_lec', primary_key=True)  # Field name made lowercase. The composite primary key (Id_lec, Id_user) found, that is not supported. The first column is selected.
    id_dep = models.ForeignKey(Department, models.DO_NOTHING, db_column='Id_dep')  # Field name made lowercase.
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='Id_user')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Lecturer'
        unique_together = (('id_lec', 'id_user'),)


class Lectureranswer(models.Model):
    id_ans = models.AutoField(db_column='Id_ans', primary_key=True)  # Field name made lowercase. The composite primary key (Id_ans, Id_task, Id_top, Id_chap, Id_conc_disc, Id_disc) found, that is not supported. The first column is selected.
    is_right = models.BooleanField(db_column='Is_right')  # Field name made lowercase.
    id_task = models.ForeignKey('Task', models.DO_NOTHING, db_column='Id_task')  # Field name made lowercase.
    id_top = models.IntegerField(db_column='Id_top')  # Field name made lowercase.
    id_chap = models.IntegerField(db_column='Id_chap')  # Field name made lowercase.
    id_conc_disc = models.IntegerField(db_column='Id_conc_disc')  # Field name made lowercase.
    id_disc = models.IntegerField(db_column='Id_disc')  # Field name made lowercase.
    answer = models.CharField(db_column='Answer', max_length=200, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'LecturerAnswer'
        unique_together = (('id_ans', 'id_task', 'id_top', 'id_chap', 'id_conc_disc', 'id_disc'),)


class Result(models.Model):
    id_res = models.AutoField(db_column='Id_res', primary_key=True)  # Field name made lowercase. The composite primary key (Id_res, Id_test) found, that is not supported. The first column is selected.
    rating = models.CharField(db_column='Rating', max_length=25)  # Field name made lowercase.
    date_reg = models.DateField(db_column='Date_reg')  # Field name made lowercase.
    id_lec = models.ForeignKey(Lecturer, models.DO_NOTHING, db_column='Id_lec')  # Field name made lowercase.
    id_stud = models.ForeignKey('Student', models.DO_NOTHING, db_column='Id_stud')  # Field name made lowercase.
    id_test = models.ForeignKey('Test', models.DO_NOTHING, db_column='Id_test')  # Field name made lowercase.
    id_user = models.IntegerField(db_column='Id_user', blank=True, null=True)  # Field name made lowercase.
    id_user1 = models.IntegerField(db_column='Id_user1', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Result'
        unique_together = (('id_res', 'id_test'),)


class Student(models.Model):
    id_stud = models.AutoField(db_column='Id_stud', primary_key=True)  # Field name made lowercase. The composite primary key (Id_stud, Id_user) found, that is not supported. The first column is selected.
    id_dir = models.ForeignKey(Direction, models.DO_NOTHING, db_column='Id_dir')  # Field name made lowercase.
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='Id_user')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Student'
        unique_together = (('id_stud', 'id_user'),)


class Studentanswer(models.Model):
    id_ans = models.AutoField(db_column='Id_ans', primary_key=True)  # Field name made lowercase. The composite primary key (Id_ans, Id_res, Id_test) found, that is not supported. The first column is selected.
    id_res = models.ForeignKey(Result, models.DO_NOTHING, db_column='Id_res')  # Field name made lowercase.
    id_test = models.IntegerField(db_column='Id_test')  # Field name made lowercase.
    id_task = models.ForeignKey('Task', models.DO_NOTHING, db_column='Id_task')  # Field name made lowercase.
    id_top = models.IntegerField(db_column='Id_top', blank=True, null=True)  # Field name made lowercase.
    id_chap = models.IntegerField(db_column='Id_chap', blank=True, null=True)  # Field name made lowercase.
    id_conc_disc = models.IntegerField(db_column='Id_conc_disc', blank=True, null=True)  # Field name made lowercase.
    id_disc = models.IntegerField(db_column='Id_disc', blank=True, null=True)  # Field name made lowercase.
    answer = models.CharField(db_column='Answer', max_length=200, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'StudentAnswer'
        unique_together = (('id_ans', 'id_res', 'id_test'),)


class Task(models.Model):
    question = models.CharField(db_column='Question', max_length=1000)  # Field name made lowercase.
    id_task = models.AutoField(db_column='Id_task', primary_key=True)  # Field name made lowercase. The composite primary key (Id_task, Id_top, Id_chap, Id_conc_disc, Id_disc) found, that is not supported. The first column is selected.
    id_diff = models.ForeignKey(Difficulty, models.DO_NOTHING, db_column='Id_diff')  # Field name made lowercase.
    id_type = models.ForeignKey('Type', models.DO_NOTHING, db_column='Id_type')  # Field name made lowercase.
    id_top = models.ForeignKey('Topic', models.DO_NOTHING, db_column='Id_top')  # Field name made lowercase.
    id_chap = models.IntegerField(db_column='Id_chap')  # Field name made lowercase.
    id_conc_disc = models.IntegerField(db_column='Id_conc_disc')  # Field name made lowercase.
    id_disc = models.IntegerField(db_column='Id_disc')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Task'
        unique_together = (('id_task', 'id_top', 'id_chap', 'id_conc_disc', 'id_disc'),)


class Test(models.Model):
    id_test = models.AutoField(db_column='Id_test', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=80)  # Field name made lowercase.
    date_reg = models.DateField(db_column='Date_reg')  # Field name made lowercase.
    date_change = models.DateField(db_column='Date_change', blank=True, null=True)  # Field name made lowercase.
    id_tick = models.ForeignKey('Ticket', models.DO_NOTHING, db_column='Id_tick')  # Field name made lowercase.
    id_conc_disc = models.ForeignKey(Concretediscipline, models.DO_NOTHING, db_column='Id_conc_disc')  # Field name made lowercase.
    id_lec = models.ForeignKey(Lecturer, models.DO_NOTHING, db_column='Id_lec')  # Field name made lowercase.
    id_disc = models.IntegerField(db_column='Id_disc', blank=True, null=True)  # Field name made lowercase.
    id_user = models.IntegerField(db_column='Id_user', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Test'


class Ticket(models.Model):
    id_tick = models.AutoField(db_column='Id_tick', primary_key=True)  # Field name made lowercase.
    date_reg = models.DateField(db_column='Date_reg')  # Field name made lowercase.
    date_change = models.DateField(db_column='Date_change', blank=True, null=True)  # Field name made lowercase.
    id_conc_disc = models.ForeignKey(Concretediscipline, models.DO_NOTHING, db_column='Id_conc_disc')  # Field name made lowercase.
    id_disc = models.IntegerField(db_column='Id_disc', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Ticket'


class Tickettasks(models.Model):
    id_tt = models.AutoField(db_column='Id_tt', primary_key=True)  # Field name made lowercase. The composite primary key (Id_tt, Id_tick, Id_task, Id_top, Id_chap, Id_conc_disc, Id_disc) found, that is not supported. The first column is selected.
    id_task = models.ForeignKey(Task, models.DO_NOTHING, db_column='Id_task')  # Field name made lowercase.
    id_tick = models.ForeignKey(Ticket, models.DO_NOTHING, db_column='Id_tick')  # Field name made lowercase.
    id_top = models.IntegerField(db_column='Id_top')  # Field name made lowercase.
    id_chap = models.IntegerField(db_column='Id_chap')  # Field name made lowercase.
    id_conc_disc = models.IntegerField(db_column='Id_conc_disc')  # Field name made lowercase.
    id_disc = models.IntegerField(db_column='Id_disc')  # Field name made lowercase.
    value = models.IntegerField(db_column='Value', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'TicketTasks'
        unique_together = (('id_tt', 'id_tick', 'id_task', 'id_top', 'id_chap', 'id_conc_disc', 'id_disc'),)


class Topic(models.Model):
    name = models.CharField(db_column='Name', max_length=80)  # Field name made lowercase.
    id_top = models.AutoField(db_column='Id_top', primary_key=True)  # Field name made lowercase. The composite primary key (Id_top, Id_chap, Id_conc_disc, Id_disc) found, that is not supported. The first column is selected.
    id_chap = models.ForeignKey(Chapter, models.DO_NOTHING, db_column='Id_chap')  # Field name made lowercase.
    id_conc_disc = models.IntegerField(db_column='Id_conc_disc')  # Field name made lowercase.
    id_disc = models.IntegerField(db_column='Id_disc')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Topic'
        unique_together = (('id_top', 'id_chap', 'id_conc_disc', 'id_disc'),)


class Type(models.Model):
    name = models.CharField(db_column='Name', max_length=30)  # Field name made lowercase.
    id_type = models.AutoField(db_column='Id_type', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Type'


class User(models.Model):
    surname = models.CharField(db_column='Surname', max_length=30)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=15)  # Field name made lowercase.
    second_name = models.CharField(db_column='Second_Name', max_length=30, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=60)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=12, blank=True, null=True)  # Field name made lowercase.
    login = models.CharField(db_column='Login', unique=True, max_length=50)  # Field name made lowercase.
    password = models.CharField(db_column='Password', max_length=100)  # Field name made lowercase.
    reg_date = models.DateField(db_column='Reg_date')  # Field name made lowercase.
    id_user = models.AutoField(db_column='Id_user', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'User'

class Token(models.Model):
    token = models.CharField(db_column='token',max_length=200)
    id_user = models.IntegerField(db_column='id_user')
    class Meta:
        managed = True
        db_table = 'Token'
