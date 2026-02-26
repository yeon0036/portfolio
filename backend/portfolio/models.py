from django.db import models


class PortfolioItem(models.Model):
    """포트폴리오 또는 디자인 항목 (PortfolioProps | DesignProps)"""

    class ItemType(models.TextChoices):
        PORTFOLIO = 'portfolio', 'Portfolio'
        DESIGN = 'design', 'Design'

    class ProjectType(models.TextChoices):
        MOBILE = 'Mobile', 'Mobile'
        WEB = 'Web', 'Web'

    id = models.CharField(max_length=64, primary_key=True)
    title = models.CharField(max_length=200)
    intro = models.TextField()
    image = models.URLField(max_length=500)
    category = models.CharField(max_length=100)
    link = models.URLField(max_length=500)
    thumbnail = models.URLField(max_length=500)
    item_type = models.CharField(max_length=20, choices=ItemType.choices, default=ItemType.PORTFOLIO)
    type = models.CharField(max_length=20, choices=ProjectType.choices, null=True, blank=True)  # Mobile | Web
    github = models.URLField(max_length=500, blank=True)

    # overviewImages: [{ section, images: [{ src, alt }] }]
    overview_images = models.JSONField(default=list)

    # Portfolio 전용: features, tools, rnr
    features = models.JSONField(default=list, null=True, blank=True)  # [{ title, description }]
    tools = models.JSONField(default=list)   # [{ src, alt }]
    rnr = models.JSONField(default=list, null=True, blank=True)  # [string]

    # Design 전용: details
    details = models.JSONField(default=dict, null=True, blank=True)
    # details 구조: { functions, tools, rnr, build: { motivation, competitors } }

    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"{self.id}: {self.title}"
