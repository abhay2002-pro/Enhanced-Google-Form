const { Question } = require("../models");

class QuestionService {
  /**
   * Create a new question.
   * @param {Object} questionData - Question data to be saved in the database.
   * @returns {Promise<Object>} - The created question.
   */
  static async createQuestion(questionData) {
    const question = new Question(questionData);
    return await question.save();
  }
}

module.exports = QuestionService;
