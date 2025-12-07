
CREATE DATABASE IF NOT EXISTS s33_db;
USE s33_db;

CREATE TABLE chart_points(
 id INT AUTO_INCREMENT PRIMARY KEY,
 chart_id VARCHAR(20),
 label VARCHAR(50),
 value FLOAT
);

INSERT INTO chart_points(chart_id,label,value) VALUES
('chart1','2022',60),
('chart1','2023',70),
('chart1','2024',82),
('chart1','2025',92);

INSERT INTO chart_points(chart_id,label,value) VALUES
('chart2','Runway Gen-4.5',1247),
('chart2','Google Veo 3',1205),
('chart2','OpenAI Sora 2 Pro',1180);
