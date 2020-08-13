select * from bank.client where length(FirstName) < 6;
select * from bank.department where DepartmentCity like 'Lviv';
select * from bank.client where Education like 'high' order by LastName;
select * from bank.client order by firstName Desc limit 5;
select * from bank.client where LastName like '%ov' or '%ova';
select * from bank.client where City like 'Kyiv';
select Firstname,Passport from bank.client order by Firstname;
select * from  bank.application where sum > 5000;
select count(*),city from bank.client where City like 'Lviv';
select sum from bank.application ;
select count(Client_idClient) from bank.application;
select max(sum) max,min(sum) min from bank.application ;
select count(Client_idClient) from bank.application join bank.client where Education like 'high';
select * from bank.client join bank.application order by sum limit 1;
select * from bank.department join bank.application order by sum desc limit 1;
select * from bank.department join bank.application order by sum desc limit 1;
#select bank.client from (select * from bank.application where Education like 'high' )
update bank.client join bank.department on bank.client.City = bank.department.DepartmentCity set City = 'Kyiv'  where DepartmentCity = 'Kyiv';
#delete from bank.application where CreditState = 'Returned';
#delete sum  from bank.application where select bank.client.FirstName like '[_aio%]';

select * from bank.department join bank.application where  DepartmentCity = 'Lviv' and sum > 5000 ;

select * from bank.client join bank.application where CreditState = 'Returned' and sum > 5000;

select * from bank.application where CreditState = 'Not returned' order by sum desc limit 1;

select * from bank.client join bank.application order by sum limit 1;



#select sum from (select * from bank.application order by sum );

#select * from bank.client join bank.application where count(Client_idClient) 





