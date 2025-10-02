# Contributing to Prompt Manager

First off, thank you for considering contributing to Prompt Manager! It's people like you that make this project better.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Be respectful and inclusive
- Be collaborative
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if applicable**
- **Include your environment details** (OS, Node version, MongoDB version)

### Suggesting Enhancements

Enhancement suggestions are welcome! When suggesting enhancements:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any similar features in other applications**

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** ensuring code quality
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Write clear commit messages**
6. **Submit a pull request**

#### Pull Request Guidelines

- Follow the existing code style
- Write clear, concise commit messages
- Include comments in your code where necessary
- Update the README.md if you change functionality
- Test your changes before submitting

## Development Setup

1. **Clone your fork:**
   ```bash
   git clone https://github.com/yourusername/Mongo_3.git
   cd Mongo_3
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment:**
   ```bash
   copy .env.example .env
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## Coding Standards

### JavaScript Style Guide

- Use ES6+ features where appropriate
- Use `const` and `let` instead of `var`
- Use arrow functions for callbacks
- Use template literals for string concatenation
- Add semicolons at the end of statements
- Use 2 spaces for indentation

### File Naming

- Use lowercase with hyphens for CSS files: `style.css`
- Use camelCase for JavaScript files: `database.js`
- Use PascalCase for model files: `Prompts.js`

### Comments

- Write comments for complex logic
- Use JSDoc for function documentation
- Keep comments up-to-date with code changes

### Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters or less
- Reference issues and pull requests liberally

Example:
```
Add user authentication feature

- Implement login/logout functionality
- Add session management
- Create user model and routes
- Add authentication middleware

Fixes #123
```

## Testing

Before submitting a pull request:

1. Test all CRUD operations
2. Test responsive design on different screen sizes
3. Verify error handling
4. Check console for any errors

## Project Structure

When adding new features, maintain the existing structure:

```
├── config/          # Configuration files
├── Models/          # Database models
├── routes/          # Route handlers
├── views/           # EJS templates
│   ├── partials/    # Reusable components
│   └── prompts/     # Prompt-specific views
├── public/          # Static assets
│   └── css/         # Stylesheets
└── index.js         # Main application file
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## Recognition

Contributors will be recognized in the project README and release notes.

---

Thank you for contributing! 🎉
