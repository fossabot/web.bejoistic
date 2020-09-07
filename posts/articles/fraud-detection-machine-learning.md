---
title: Solving Financial Fraud Detection With Machine Learning Methods
subtitle: "In this article, we’ve reviewed the total of 7 ML models."
description: "In this article, we’ve reviewed the total of 7 ML models."
slug: fraud-detection-machine-learning
date: 2018-02-23
tags: ["article", "deeplearning", "machinelearning", "financial"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

For decades, financial organizations used rule-based monitoring systems for fraud detection.

These legacy solutions were deployed in SQL or C/C++. They were attempts of the engineers to transfer the knowledge of domain experts into sequel queries, which would typically end up being long, convoluted, and extremely brittle.

And whenever they tried to change parts of these fraud detection systems later, to update a threshold or something, it led to the breaking of the entire codebase.

This prevented banks from fighting fraud effectively – the criminals would just come up with new ways around alert triggers in their weak, rule-based platforms.

So now many financial firms have abandoned their legacy tools to try and solve fraud detection with new-age machine learning solutions, and more still are planning to follow suit in the future.

ML algorithms can process millions of data objects quickly and link instances from seemingly unrelated datasets to detect suspicious patterns. They’re one of the only tools left that can help banks and FinTechs keep up with new defrauding schemes, which are growing increasingly sophisticated.

But it might be unclear for someone who’s not a data scientist which algorithm to opt for to help their company identify illicit transactions. In this post, we’ll describe a few popular choices.

## Financial Fraud Detection – Machine Learning Techniques

![Fraud Detection](/static/img/posts/articles/fraud-detection.jpg)

Both supervised and unsupervised methods of various complexity have been applied by banks to spot anomalies in financial data. Let’s start with the supervised ones.

_Supervised Models used in Fraud Detection Software_

**Random Forest.** The method leverages a set of randomized [decision trees](https://en.wikipedia.org/wiki/Decision_tree_learning) and averages across their predictions to create outputs. It has multiple trees producing different values and this prevents the algorithm from [overfitting](https://www.investopedia.com/terms/o/overfitting.asp) to training datasets (something standard decision tree algorithms tend to do) and makes it more robust to noise.

Numerous comparative studies have been published that prove RF’s effectiveness in fraud detection relative to other models. The results of [this research](https://www.sciencedirect.com/science/article/abs/pii/S095741741400089X) show that an RF-based model outperforms a support vector machine and even a neural network in terms of AP, AUC, and PrecisonRank metrics (all of the models made predictions on a real transaction data from a Belgian payment provider.)

This paper (by [Van Vlasselaer et al.,](https://www.researchgate.net/publication/276152711_APATE_A_Novel_Approach_for_Automated_Credit_Card_Transaction_Fraud_Detection_using_Network-Based_Extensions)) indicates that random forests can have stronger predictive power than neural nets and linear regression algorithms: the experiments on an extensive real-transaction dataset (3+ million transaction), show that an RF model reaches better AOC than the other two.

Besides that, there’s also a [publication](https://www.researchgate.net/publication/225586212_Transaction_aggregation_as_a_strategy_for_credit_card_fraud_detection) saying that RF is superior to k-nearest neighbors and in anomaly detection.

**K-nearest neighbors (KNN).** The algorithm predicts which class an unseen instance belongs to, based on K (a predefined number) most similar data objects. The similarity is typically defined by [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) but, for specific settings, [Chebyshev](https://en.wikipedia.org/wiki/Chebyshev_distance) and [Hamming](https://www.tutorialspoint.com/what-is-hamming-distance) distance measures can be applied too, when that’s more suitable.

So, after being given an unseen observation, KNN runs through the entire annotated dataset and computes the similarity between the new data object and all other data objects in it. When an instance has similarities with objects in different categories, the algorithm picks the class that has **the most votes.** If K=10, for example, and the object has 7 nearest neighbors in category `a` , and 3 nearest neighbors in category `b` – it will be assigned to `a` .

Though quite sensitive to noise, KNN performs well on real financial transaction data. Over the years, studies have demonstrated that KNNs can have [a lower error rate](https://bradzzz.gitbooks.io/ga-seattle-dsi/content/dsi/dsi_05_classification_databases/2.1-lesson/assets/datasets/DefaultCreditCardClients_yeh_2009.pdf) than Decision Trees and Logistic Regression models, and that they can beat Support Vector Machines in terms [of fraud detection rates](https://www.researchgate.net/publication/266746615_FraudMiner_A_Novel_Credit_Card_Fraud_Detection_Model_Based_on_Frequent_Itemset_Mining) (sensitivity) as well as Random Forests in balance classification rate.

**Logistic Regression.** An easily explainable model that enables us to predict the probability of a categorical response based on one or a few predictor variables. LR is quick to implement, which might make it seem like an attractive option. However, the empirical evidence shows it performs poorly when dealing with non-linear data and that it tends to overfit to training datasets.

[This paper](https://www.researchgate.net/publication/252016456_Detecting_credit_card_fraud_by_ANN_and_logistic_regression), for instance, describes how neural nets have a clear edge over LR-based models in solving credit card fraud detection problems. Similarly, this [comparative research](https://ieeexplore.ieee.org/document/7937700) states LR can’t provide predictions as accurate as those produced by a deep learning model and [Gradient Boosted Tree](https://towardsdatascience.com/machine-learning-part-18-boosting-algorithms-gradient-boosting-in-python-ef5ae6965be4) (for this experiment, the researchers had all three models making predictions on a dataset containing about 80 million transactions with 69 attributes.)

**Support Vector Machine.** SVMs, advanced yet simple in implementation, derive optimal hyperplanes that maximize a margin between classes. They utilize kernel functions to project input data onto high-dimensional feature spaces, wherein it’s easier to separate instances linearly. This makes SVMs particularly effective in terms of non-linear classification problems such as financial fraud detection.

[In this study](https://ieeexplore.ieee.org/document/1614747), the performance of an SVM in investigating a time-varying fraud problem is compared to that of a neural net. The researchers write that though the models show similar results (in terms of accuracy) during training, the neural net tends to overfit to training datasets more which makes the SVMs a superior solution in the long run.

Another research (by [Lu & Ju](https://www.researchgate.net/publication/272849660_Research_on_Credit_Card_Fraud_Detection_Model_Based_on_Class_Weighted_Support_Vector_Machine)) says that an imbalance class weighted SVM-based fraud detection model is more suitable for working with real-world credit card transactional data (which is imbalance in nature) and shows higher accuracy rates in the fraud detection problem than [Naive Bayes](https://www.geeksforgeeks.org/naive-bayes-classifiers/), Decision Tree, and Back Propagation Neural Network classifiers.

_It should be noted though that while SVMs work great in complicated domains that have distinct margins of separation, their performance on large data sets is generally average. If there’s noise in data, it can hamper SVM’s accuracy tremendously, so when there are many overlapping classes (and we need to count independent evidence) other supervised algorithms would probably make a better choice._

**Long Short-Term Memory.** LSTM is a type of Recurrent Neural Network architecture that’s designed specifically to learn long-range dependencies; it tackles the vanishing error problem (which RNNs are particularly prone to due to using the same processing units on every layer) by applying constant error carousels to enforce a constant error flow within cells. The model’s key property is that it has multiplicative gates that learn to decide when to grant access to cells and which parts of input to ignore.

LSTMs are difficult to integrate into real-world applications at this point, so they haven’t yet become a mainstream tool for financial fraud detection among banks. However, there are already scientific papers published that formulate credit card fraud detection as a sequence classification task for which LSTMs, due to their unique properties, are a perfect solution. [This publication](https://www.sciencedirect.com/science/article/abs/pii/S0957417418300435), for example, suggests that when compared to a random forest classifier, an LSTM can increase fraud detection accuracy even on offline transactions (the situations where card-holders are present physically at the bank).

Also, according to Nitin Sharma , Paypal has [achieved remarkable results](https://www.youtube.com/watch?v=M1iKFlERRWk&t=390s) in classifying clients’ behavior using the architecture. Rather than concentrating on researching the transactions alone (which gives quite a limited amount of information), the payment provider has decided to study, through LSTMs, the long sequences of event-based user behavior to see the bigger picture.

Instead of manually engineering features and hardcoding timelines, the company uses raw event data and applies LSTMs to learn temporal representations. This enables PayPal to model the problem at the event level and analyze the actions that might lead to a fraudulent transaction (they look into clues such as whether the user has changed their home, shipping, or billing address, or whether they replaced their contact details, etc.)

This switch from hand-coded features to using raw event data and LSTMs has given PayPal a more granular perspective on the fraud detection problem, Nitin says, as well as increased their performance in anomaly detection by 7-10%.

## Unsupervised Algorithms For Fraud Detection in Banking

![Fraud Detection](/static/img/posts/articles/fraud-02-scaled.jpg)

**K-means.** One of the oldest, most well-known unsupervised techniques K-means is still widely used. The method boils down to partitioning instances of unlabeled data into a number (K) of clusters in a way that minimizes the square distance between the data objects and centroid in each cluster.

The basic flow of the algorithm goes like this: we pick K (the number of clusters the algorithm will be trying to produce) and the model chooses, at random, K of points to be centers of these clusters.

Then, each centroid claims all the data points closest to it and after the results of the first attempt at clustering are obtained, the algorithm recomputes the centroids by averaging the cluster points. It then keeps looping through these two actions until the convergence is reached.

The model’s weak point is that it is ultra-sensitive to the initial center points and thus vulnerable to outliers. Also, the knowledge of someone who has deep financial expertise would be needed to pick the optimal value for K.

That being said, there are several studies describing the successful application of k-means to the anomaly identification task. [Here](https://www.researchgate.net/publication/272863425_Fraud_Detection_in_Credit_Card_by_Clustering_Approach), researchers generated an extensive dataset consisting of credit card numbers, merchant category IDs, transaction dates, countries, and amounts, and had the model try to divide the data points into four clusters: low, high, risky, high risk.

The results were encouraging, the researchers say, as fraudulent activities were spotted most of the time and there was but a slight false positive rate.

There are also more complex approaches involving the architecture, [such as this one](https://www.semanticscholar.org/paper/Credit-Card-Fraud-Detection-Using-HMM-and-K-Means-Kumari-Bhilai/16146abaf34f53fa1380f4addb84527dd54e3fcf). The framework proposed in the paper combines K-means with a Hidden Markov Model to tackle criminal activity detection. The prior is applied to the historical data from a financial services provider to categorize customers based on how much money they usually spend (the categories are: low, medium, and high transactions) and then the latter model generates outputs that are probabilities of transactions being fraudulent.

**Self-organizing Map (SOM).** This unsupervised deep learning method is used for clustering of high-dimensional data. It tries to project data down (the data doesn’t need to be linear) to one- or two-dimensional surfaces while capturing as much information about the dataset’s inner structure as possible.

Here’s how it works: we first find a neuron in the network that has similar weights to the input feature values (the input vector is sampled at random) and then we calculate the neighborhood of that neuron.

After we’ve found the best matching unit, we update the weights of the neuron and the neurons closest to it to make them more like the input vector (the closer the neurons are, the more their weights are modified, the farther away, the less.) We repeat this by sampling a new input vector each time to go through the entire dataset.

The neurons that represent input instances act similarly to centroids in K-Means, which is why some call SOM a constrained K-means.

Due to its inherent capability to reduce dimensionality, the algorithm is uniquely poised to deal with high-dimensional inputs such as transaction data. When applied to detection of abnormal transactional activities, the model first groups data into categories of “fraudulent” and “legitimate” through self-organization (which is the iterative updating of neurons’ weights to capture the best possible input representations) and then, after being given a new instance, assigns it to one of the groups based on how similar the input is to genuine or fraudulent transactions.

An interesting SOM-based method for identifying fraud [is proposed here](https://www.sciencedirect.com/science/article/abs/pii/S0950705114002652). The researchers visualize multidimensional data (the matrices that store records that reflect sequential activities of users) through a self-organizing map and then apply a threshold-type system for fraud detection. The method shows clear benefits of SOM produced visualization for transaction classification.

Another [noteworthy work](https://www.irjet.net/archives/V4/i3/IRJET-V4I3608.pdf) (by Agaskar et al.,) proposes an unsupervised model that identifies fraudulent transactions based on customers’ previous transaction details i.e location and amount information. The clusters are obtained through a SOM, and then association rules are applied additionally to each cluster to avoid receiving unclear decision boundaries.

**To conclude**

There’s been a variety of machine learning-based methods proposed, both supervised and unsupervised, to tackle the issue of fraud detection. The supervised approaches rely on explicit transaction labels i.e. machines need to be shown, repeatedly, what genuine transactions look like during training to be able to distinguish the fraudulent ones later.

In contrast, unsupervised models capture normal data distribution in unlabeled data sets when they’re being trained. And then, when given a new data instance, they try to determine whether the sample is legitimate or abnormal (suspicious) based on the patterns and structures they’ve derived.

In this article, we’ve reviewed the total of 7 ML models, but there’s no telling which method will suit your processes and your particular setting best, without doing research and experimentation. We’d have to assess what data and features you have readily available to figure out which model can help you detect fraud efficiently.
