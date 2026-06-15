# Write your MySQL query statement below
(select name as results from users
join MovieRating
on users.user_id = MovieRating.user_id
group by name
order by count(*) desc,name
limit 1)

union all

(select title as results from MovieRating 
join Movies
on MovieRating.movie_id = Movies.movie_id
where extract(year from created_at)=2020 and extract(month from created_at)= 02
group by title
order by avg(rating) desc, title
limit 1)