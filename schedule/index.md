---
layout: sub-page
---

<section id="schedule" class="main-content text-center">
	<div class="container">

 	   <header>
Schedule is as follows. 
 	   </header>

{% assign days = site.schedule | sort:day_no | reverse  %}
{% include schedule/schedule-list.md collection=days %}

	</div>
</section>
