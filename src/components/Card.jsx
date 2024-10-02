import React from 'react';
import a from '../icons_FEtask/3 dot menu.svg'; 
import c from '../icons_FEtask/Done.svg'; 

const Card = ({ tickets }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.id}>{tickets.id}</span>
        <img src={c} alt="c icon" style={styles.cIcon} />
      </div>
      <div style={styles.title}>
        {tickets.title}
      </div>
      <div style={styles.footer}>
        <div style={styles.tagContainer}>
          <img src={a} alt="tag icon" style={styles.tagIcon} />
        </div>
        <div style={styles.tagContainer}>
          <span style={styles.tag}>{tickets.tag[0]}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid rgb(224, 224, 224)', // light gray
    borderRadius: '10px',
    padding: '16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
    marginBottom: '10px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  id: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'rgb(128, 128, 128)', 
  },
  title: {
    fontSize: '16px',
    margin: '12px 0',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  tagContainer: {
    border: '1px solid rgb(192, 192, 192)', 
    borderRadius: '8px',
    padding: '4px 8px',
    backgroundColor: 'transparent',
  },
  tag: {
    fontSize: '12px',
    color: 'rgb(128, 128, 128)', 
  },
  tagIcon: {
    width: '16px',
    height: '16px',
  },
  cIcon: {
    width: '16px',
    height: '16px',
    marginLeft: '10px',
  },
};

export default Card;
