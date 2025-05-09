# Minimalist Educational Hugo Website

This is a minimalist Hugo website designed for educational content. It features a clean, distraction-free design with support for mathematical equations, code syntax highlighting, and a structured learning track system.

## Features

- Clean, minimalist design with serif fonts
- Support for mathematical equations using KaTeX
- Code syntax highlighting
- Organized learning tracks with chapters
- Responsive design
- Navigation between chapters
- Centered and justified content

## Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) (Extended version recommended)

### Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd my-hugo-site
   ```

2. Start the Hugo development server:
   ```
   hugo server -D
   ```

3. Open your browser and navigate to `http://localhost:1313`

## Content Structure

The website is structured as follows:

- **Home**: Landing page with featured learning tracks
- **About Us**: Information about the website and team
- **Learning Tracks**: Educational content organized into tracks and chapters

### Creating a New Learning Track

1. Create a new directory in `content/learning-tracks/`:
   ```
   hugo new learning-tracks/new-track/_index.md
   ```

2. Add chapters to the track:
   ```
   hugo new learning-tracks/new-track/chapter1.md
   hugo new learning-tracks/new-track/chapter2.md
   ```

## Customization

### Modifying the Theme

The design is minimalist by design. You can customize the look by editing:

- `assets/css/main.css`: Main stylesheet
- Layout templates in the `layouts/` directory

### Adding Features

To add new features while maintaining the minimalist approach:

1. Modify templates in `layouts/`
2. Add custom shortcodes in `layouts/shortcodes/`
3. Extend the CSS in `assets/css/main.css`

## License

This project is open source and available under the [MIT License](LICENSE).