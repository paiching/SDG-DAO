import React, { useState } from 'react';
import styles from './ProposalForm.module.css'; // 导入CSS模块

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    proposalName: '',
    proposalCategory: '',
    proposalAmount: '',
    proposalStartDate: '',
    proposalEndDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // 这里可以添加将表单数据发送到服务器的代码
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label htmlFor="proposalName" className={styles.label}>提案名稱</label>
        <input
          id="proposalName"
          type="text"
          name="proposalName"
          value={formData.proposalName}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="proposalCategory" className={styles.label}>提案類別</label>
        <select
          id="proposalCategory"
          name="proposalCategory"
          value={formData.proposalCategory}
          onChange={handleInputChange}
          className={styles.select}
        >
          <option value="">請選擇類別</option>
          {/* ...其他选项 */}
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="proposalAmount" className={styles.label}>提案金額</label>
        <input
          id="proposalAmount"
          type="number"
          name="proposalAmount"
          value={formData.proposalAmount}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>提案開始與結束時間</label>
        <div className={styles.dateInputContainer}>
          <input
            type="date"
            name="proposalStartDate"
            value={formData.proposalStartDate}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="date"
            name="proposalEndDate"
            value={formData.proposalEndDate}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
      </div>
      <button type="submit" className={styles.submitButton}>提交提案</button>
    </form>
  );
};

export default ProposalForm;
