import React from 'react';
import styles from './CardGrid.module.css';
import AnimationCard from './AnimationCard';
import ToolCard from './ToolCard';

export default function CardGrid({ category }) {
  const isAnimation = category.type === 'animation' || category.id.includes('animation') || category.id.includes('visualization');
  
  if (!category || !category.items || category.items.length === 0) {
    return (
      <div className={styles.section}>
        <h2 className={styles.sectionTitle} id={category.id}>{category.title}</h2>
        <div className={styles.emptyState}>
          <span className="material-symbols-outlined">construction</span>
          <p>正在筹备中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle} id={category.id}>{category.title}</h2>
      <div className={isAnimation ? styles.animationGrid : styles.toolGrid}>
        {category.items.map((item, idx) => (
          isAnimation 
            ? <AnimationCard key={idx} item={item} />
            : <ToolCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}
