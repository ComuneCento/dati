---
---
jekyllPostsCallback([
      {% for datasets in site.datasets %}
            {
            "id"         : "{{ datasets.id }}",
            "title"      : "{{ datasets.title | escape }}",
            "category"   : "{{ datasets.category }}",
            "organization"       : "{{ datasets.organization | organization: ', ' }}",
            "notes"        : "{{ datasets.notes }}",
            "resources"       : "{{ datasets.resources }}",
            "maintainer"       : "{{ datasets.maintainer }}",
            "maintainer_email"   : "{{ datasets.maintainer_email }}"
            } {% if forloop.last %}{% else %},{% endif %}
      {% endfor %}
]);
