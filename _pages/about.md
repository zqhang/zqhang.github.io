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

Hi! I am **Qihang Zhou**, currently a researcher at **Tencent Youtu Lab**. I received my Ph.D. degree from **Zhejiang University**, where I conducted my doctoral research at **NESC**, led by **Academician Youxian Sun**, under the supervision of **Prof. Shibo He** and **Prof. Jiming Chen**. My previous research has mainly focused on **data-centric machine learning**, particularly **data quality** through anomaly detection and **data efficiency** through dataset distillation. In addition to these directions, my current research interests have expanded to **3D generation** and **video generation**. I am always happy to discuss research ideas and potential collaborations. **Feel free to contact me.**

You can find my full publication list on [Google Scholar](https://scholar.google.com/citations?user=mkGKMDQAAAAJ&hl=en) and my open-source projects on [GitHub](https://github.com/zqhang).

# 🔥 News

- *2026*: **TokenCLIP: Token-wise Prompt Learning for Zero-shot Anomaly Detection** was accepted to **NeurIPS 2026**.  
  **Qihang Zhou**, Binbin Gao, Guansong Pang, Xin Wang, Jiming Chen, Shibo He.

- *2026.07*: **CODiff: One-Step Diffusion Model for Camouflaged Object Detection**, **ICML 2026**.  
  Xiaotong Fu, Qian Liu, **Qihang Zhou**, Wenchao Meng, Qinmin Yang, Shibo He.

- *2026.03*: **FIRM-MoE: Fine-Grained Expert Decomposition for Resource-Adaptive MoE Inference**, **AAAI 2026**.  
  Keyu Chen, **Qihang Zhou**, Bin Qian, Zhenyu Wen, Wenchao Meng, Shibo He.

- *2025.12*: **FairDD: Fair Dataset Distillation**, **NeurIPS 2025**.  
  **Qihang Zhou**\*, ShenHao Fang\*, Shibo He, Wenchao Meng, Jiming Chen.

- *2025.09*: **PointAD+: Learning Hierarchical Representations for Zero-shot 3D Anomaly Detection**, arXiv.  
  **Qihang Zhou**, Shibo He, Jiangtao Yan, Wenchao Meng, Jiming Chen.


- *2024.11*: **MoEAD: A Parameter-Efficient Model for Multi-class Anomaly Detection**, **ECCV 2024**.  
  Shiyuan Meng, Wenchao Meng, **Qihang Zhou**, Shizhong Li, Weiye Hou, Shibo He.

- *2024.10*: **Distributed Boosting: An Enhancing Method on Dataset Distillation**, **CIKM 2024**.  
  Xuechao Chen, Wenchao Meng, Peiran Wang, **Qihang Zhou**.

- *2024.12*: **PointAD: Comprehending 3D Anomalies from Points and Pixels for Zero-shot 3D Anomaly Detection**, **NeurIPS 2024**.  
  **Qihang Zhou**, Jiangtao Yan, Shibo He, Wenchao Meng, Jiming Chen.

- *2024.05*: **AnomalyCLIP: Object-agnostic Prompt Learning for Zero-shot Anomaly Detection**, **ICLR 2024**.  
  **Qihang Zhou**\*, Guansong Pang\*, Yu Tian, Shibo He, Jiming Chen.

- *2024.07*: **Label-Free Multivariate Time Series Anomaly Detection**, **IEEE Transactions on Knowledge and Data Engineering**.  
  **Qihang Zhou**, Shibo He, Haoyu Liu, Jiming Chen, Wenchao Meng.

- *2024.08*: **Large Language Model Guided Knowledge Distillation for Time Series Anomaly Detection**, **IJCAI 2024**.  
  Chen Liu, Shibo He, **Qihang Zhou**, Shizhong Li, Wenchao Meng.

- *2023.06*: **Detecting Multivariate Time Series Anomalies with Zero Known Label**, **AAAI 2023**.  
  **Qihang Zhou**, Jiming Chen, Haoyu Liu, Shibo He, Wenchao Meng.

- *2023.05*: **Pull & Push: Leveraging Differential Knowledge Distillation for Efficient Unsupervised Anomaly Detection and Localization**, **IEEE Transactions on Circuits and Systems for Video Technology**.  
  **Qihang Zhou**, Shibo He, Haoyu Liu, Tao Chen, Jiming Chen.



\* Equal contribution.

# 📝 Selected Publications

### TokenCLIP: Token-wise Prompt Learning for Zero-shot Anomaly Detection
**Qihang Zhou**, Binbin Gao, Guansong Pang, Xin Wang, Jiming Chen, Shibo He  
**NeurIPS 2026**

### FairDD: Fair Dataset Distillation
**Qihang Zhou**, ShenHao Fang, Shibo He, Wenchao Meng, Jiming Chen  
**NeurIPS 2025**  
[[Paper](https://proceedings.neurips.cc/paper_files/paper/2025/hash/e392fb27908eb3f36e16a2cb40116472-Abstract-Conference.html)]
[[Code](https://github.com/zqhang/FairDD)]

### PointAD+: Learning Hierarchical Representations for Zero-shot 3D Anomaly Detection
**Qihang Zhou**, Shibo He, Jiangtao Yan, Wenchao Meng, Jiming Chen  
**arXiv, 2025**

### PointAD: Comprehending 3D Anomalies from Points and Pixels for Zero-shot 3D Anomaly Detection
**Qihang Zhou**, Jiangtao Yan, Shibo He, Wenchao Meng, Jiming Chen  
**NeurIPS 2024**  
[[Paper](https://openreview.net/forum?id=02CIZ8qeDc)]
[[Code](https://github.com/zqhang/PointAD)]

### AnomalyCLIP: Object-agnostic Prompt Learning for Zero-shot Anomaly Detection
**Qihang Zhou**\*, Guansong Pang\*, Yu Tian, Shibo He, Jiming Chen  
**ICLR 2024**  
[[Paper](https://proceedings.iclr.cc/paper_files/paper/2024/hash/d7b50b8ac2c781a12f26155f48310d8d-Abstract-Conference.html)]
[[Code](https://github.com/zqhang/AnomalyCLIP)]

### Label-Free Multivariate Time Series Anomaly Detection
**Qihang Zhou**, Shibo He, Haoyu Liu, Jiming Chen, Wenchao Meng  
**IEEE Transactions on Knowledge and Data Engineering, 2024**  
[[Paper](https://arxiv.org/abs/2312.11549)]
[[Code](https://github.com/zqhang/MTGFLOW)]

### Detecting Multivariate Time Series Anomalies with Zero Known Label
**Qihang Zhou**, Jiming Chen, Haoyu Liu, Shibo He, Wenchao Meng  
**AAAI 2023**  
[[Paper](https://ojs.aaai.org/index.php/AAAI/article/view/25623)]
[[Code](https://github.com/zqhang/MTGFLOW)]

### Pull & Push: Leveraging Differential Knowledge Distillation for Efficient Unsupervised Anomaly Detection and Localization
**Qihang Zhou**, Shibo He, Haoyu Liu, Tao Chen, Jiming Chen  
**IEEE Transactions on Circuits and Systems for Video Technology, 2023**

\* Equal contribution.

# 🧑‍⚖️ Academic Service

- **Journal Reviewer:** IJCV, TKDE, TNNLS, TMM, PR, TCSVT, etc.
- **Conference Reviewer:** NeurIPS, ICML, ICLR, AAAI, etc.

# 🔗 Links

- [Google Scholar](https://scholar.google.com/citations?user=mkGKMDQAAAAJ&hl=en)
- [GitHub](https://github.com/zqhang)
- Email: zqhang@zju.edu.cn
