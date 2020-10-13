# Visualize Me Captain
## Captain Data Crunch LLC.
Craig Nowakowski, Raymond Garskovas, Allyson Chau and Varun Kaushik
![Captain](https://i2.wp.com/boingboing.net/wp-content/uploads/2015/07/captaincrunch.jpg?w=1600&ssl=1)

### Project Proposal
For our project proposal we will be analyzing country income level and their respective happiness. We plan on building a database which has country economic data as well as how the country has scored in the UN’s global happiness survey. Our data sources will include: the world happiness index and global economic data.

### Background
The World Happiness Report is a landmark survey of the state of global happiness. The first report was published in 2012 and has continued annually since then. Today, the report continues to gain global recognition as governments, organizations and civil society increasingly use happiness indicators to inform their policy-making decisions. Leading experts across fields – economics, psychology, survey analysis, national statistics, health, public policy and more – describe how measurements of well-being can be used effectively to assess the progress of nations. The reports review the state of happiness in the world today and show how the new science of happiness explains personal and national variations in happiness.

Happiness scores and rankings use data from the Gallup World Poll. The scores are based on answers to the main life evaluation question asked in the poll. This question, known as the Cantril ladder, asks respondents to think of a ladder with the best possible life for them being a 10 and the worst possible life being a 0 and to rate their own current lives on that scale. The scores are from nationally representative samples for the years 2013-2016 and use the Gallup weights to make the estimates representative. The columns following the happiness score estimate the extent to which each of six factors – economic production, social support, life expectancy, freedom, absence of corruption, and generosity – contribute to making life evaluations higher in each country than they are in Dystopia, a hypothetical country that has values equal to the world’s lowest national averages for each of the six factors. They have no impact on the total score reported for each country, but they do explain why some countries rank higher than others.

![Happiness](https://www.tusharvakil.com/wp-content/uploads/2019/09/Finding-Happiness.jpg)

### Project Report:

![ETL](https://www.webopedia.com/imagesvr_ce/5182/etl-diagram.JPG)

# Extracting Data: The following data sources were used to generate "Happiness Data":   

Extract is the process of reading data from a database. In this stage, the data is collected, often from multiple and different types of sources.

* https://www.kaggle.com/unsdsn/world-happiness
* https://www.kaggle.com/worldbank/world-development-indicators
* https://www.prosperity.com/about/resources

The Kaggle data sources contained data in CSV format, while Prosperity contained data in XLSX format. These datasets were chosen because they not only contained sufficient data as related to happiness (economic, health/safety, business environment, infrastructure etc.) for >150 countries, but also presented the data relatively cleanly. This was critical as the duration of the project was < 1 week; therefore, the team needed credible data that can be relatively quickly transformed for further analysis.    

# Transforming Data: The following shows how the data was cleaned up

Transform is the process of converting the extracted data from its previous form into the form it needs to be in so that it can be placed into another database. Transformation occurs by using rules or lookup tables or by combining the data with other data.

The first step in transformation was to repurpose the data tables in order to transform them. Steps taken here were to save he Prosperity dataset (Excel File) as a CSV, then read into Jupyter Notebook. The dataset also contained several columns that were not needed for final loading. Many of the columns contained Happiness related data for years prior to 2019; these were deleted. Then, the team consolidated and renamed the table columns as appropriate for all tables for ease of tracking. Finally, the team formed a plan to join the data tables together (on the three letter country code) so the reader may quickly discern, which countries were the happiest in 2019 based on a key criterion described below. 

# Loading Data: The following summarizes the finished table and its rationale

Load is the process of writing the data into the target database.

To join the tables, and simplify its readability, one key criterion of happiness was selected: Economic Productivity and Competitiveness. The rationale behind this choice is that happier countries tend to be more productive, which generates more wealth that allows the country's government and people to fund important services (infrastructure, public education, social services etc.) that helps the country become even more productive (and by extension, even more happy), and so forth.  

In theory, one can apply several other measures of "Happiness" for the analysis: Education, Business Friendliness, Safety/Security, Enviornmental Quality, Public Health etc. are also legitimate metrics of happiness one can use. The source tables contain all these metrics and more, if desired for even more in-depth analyses of what constitutes "Happiness" and which countries tend to be strong in which areas vs. strong all-around. Furthermore, each "Pillar", Health, Education etc. can further be broken down into "Elements"...these consist of specific metrics within, say Education, such as Adolescant literacy rate, Adult literacy rate etc. So depending on the specific metric of "Happiness", the source data contains >290 elements of happiness across 12 pillars (health, education etc.). 

