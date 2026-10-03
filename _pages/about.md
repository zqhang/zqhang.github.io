---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi! I am **Qihang Zhou**, a researcher at **Zhejiang University**. My research focuses on **anomaly detection**, **vision-language models**, **3D and multimodal learning**, and **reliable machine learning**.

I am particularly interested in building learning systems that can recognize anomalies under limited supervision, unseen categories, complex data distributions, and fairness constraints. My recent work covers zero-shot anomaly detection, zero-shot 3D anomaly detection, label-free multivariate time-series anomaly detection, and fair dataset distillation.

You can find my full publication list on [Google Scholar](https://scholar.google.com/citations?user=mkGKMDQAAAAJ&hl=en) and my open-source projects on [GitHub](https://github.com/zqhang).

# 🔥 News

- *2025*: **FairDD: Fair Dataset Distillation** was accepted to **NeurIPS 2025**.
- *2024*: **PointAD** was accepted to **NeurIPS 2024**.
- *2024*: **AnomalyCLIP** was accepted to **ICLR 2024**.
- *2024*: **Label-Free Multivariate Time Series Anomaly Detection** appeared in **IEEE TKDE**.

# 📝 Selected Publications

### FairDD: Fair Dataset Distillation
**Qihang Zhou**, ShenHao Fang, Shibo He, Wenchao Meng, Jiming Chen  
**NeurIPS 2025**  
[[Paper](https://proceedings.neurips.cc/paper_files/paper/2025/hash/e392fb27908eb3f36e16a2cb40116472-Abstract-Conference.html)]
[[Code](https://github.com/zqhang/FairDD)]

### PointAD: Comprehending 3D Anomalies from Points and Pixels for Zero-shot 3D Anomaly Detection
**Qihang Zhou**, Jiangtao Yan, Shibo He, Wenchao Meng, Jiming Chen  
**NeurIPS 2024**  
[[Paper](https://openreview.net/forum?id=02CIZ8qeDc)]
[[Code](https://github.com/zqhang/PointAD)]

### AnomalyCLIP: Object-agnostic Prompt Learning for Zero-shot Anomaly Detection
**Qihang Zhou**, Guansong Pang, Yu Tian, Shibo He, Jiming Chen  
**ICLR 2024**  
[[Paper](https://proceedings.iclr.cc/paper_files/paper/2024/hash/d7b50b8ac2c781a12f26155f48310d8d-Abstract-Conference.html)]
[[Code](https://github.com/zqhang/AnomalyCLIP)]

### Label-Free Multivariate Time Series Anomaly Detection
**Qihang Zhou**, Shibo He, Haoyu Liu, Jiming Chen, Wenchao Meng  
**IEEE Transactions on Knowledge and Data Engineering, 2024**  
[[Paper](https://arxiv.org/abs/2312.11549)]
[[Code](https://github.com/zqhang/MTGFLOW)]

# 💻 Open Source

- [AnomalyCLIP](https://github.com/zqhang/AnomalyCLIP) — zero-shot anomaly detection with object-agnostic prompt learning.
- [PointAD](https://github.com/zqhang/PointAD) — zero-shot 3D anomaly detection from points and pixels.
- [MTGFLOW](https://github.com/zqhang/MTGFLOW) — label-free multivariate time-series anomaly detection.
- [FairDD](https://github.com/zqhang/FairDD) — fair dataset distillation.

# 🔗 Links

- [Google Scholar](https://scholar.google.com/citations?user=mkGKMDQAAAAJ&hl=en)
- [GitHub](https://github.com/zqhang)
- Email: zqhang@zju.edu.cn
