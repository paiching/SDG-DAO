import React, { useState } from 'react';
import styles from './ProposalForm.module.scss'; // 导入CSS模块

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    proposalName: '',
    proposalCategory: '',
    proposalAmount: '',
    proposalStartDate: '',
    proposalEndDate: '',
    proposalDetail: '',
    proposalDetails: [{ detail: '' }] // 将 proposalDetail 改为数组
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.target;
    if (name.startsWith('proposalDetail')) {
      // 更新提案详情数组
      const detailsCopy = [...formData.proposalDetails];
      detailsCopy[index].detail = value;
      setFormData({
        ...formData,
        proposalDetails: detailsCopy
      });
    } else {
      // 更新其他表单字段
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const handleInputChangeEvent = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addProposalDetailInput = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      proposalDetails: [...prevFormData.proposalDetails, { detail: '' }]
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
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
          onChange={handleInputChangeEvent}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="proposalCategory" className={styles.label}>提案類別</label>
        <select
          id="proposalCategory"
          name="proposalCategory"
          value={formData.proposalCategory}
          onChange={handleInputChangeEvent}
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
          onChange={handleInputChangeEvent}
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
            onChange={handleInputChangeEvent}
            className={styles.input}
          />
          <input
            type="date"
            name="proposalEndDate"
            value={formData.proposalEndDate}
            onChange={handleInputChangeEvent}
            className={styles.input}
          />
        </div>
      </div>
      {formData.proposalDetails.map((detail, index) => (
        <div key={index} className={styles.formGroup}>
          <label htmlFor={`proposalDetail${index}`} className={styles.label}>提案內容</label>
          <textarea
            id={`proposalDetail${index}`}
            name={`proposalDetail${index}`}
            value={detail.detail}
            onChange={(e) => handleInputChange(e, index)}
            className={styles.textarea} // 注意这里使用了不同的className
          />
        </div>
      ))}
      
      <button type="button" onClick={addProposalDetailInput} className={styles.addButton}>+</button>
      <button type="submit" className={styles.submitButton}>提交提案</button>
    </form>
  );
};

export default ProposalForm;
