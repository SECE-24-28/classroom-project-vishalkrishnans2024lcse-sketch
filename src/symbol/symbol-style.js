import styled from "styled-components";

export const SymbolStyle = styled.div`
  .about-container {
    width: 100%;
    text-align: center;
    padding: 60px 20px;
    background-color: #f8f9fa;
  }
  
  .about-title {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 30px;
    color: #000;
  }
  
  .about-text {
    max-width: 900px;
    margin: 0 auto;
    font-size: 20px;
    line-height: 1.7;
    color: #495057;
    margin-bottom: 40px;
  }

  .boxes-container {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .vision-section, .mission-section {
    flex: 1;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .about-subtitle, .about-mission {
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin-bottom: 1rem;
    text-align: left;
  }

  .about-description, .about-mission-text {
    font-size: 16px;
    line-height: 1.6;
    color: #495057;
    text-align: left;
  }
`;