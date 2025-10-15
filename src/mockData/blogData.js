import blog1 from '../assets/img/blog1.png';
import blog2 from '../assets/img/blog2.png';
import blog3 from '../assets/img/blog3.png';
import blog4 from '../assets/img/blog4.png';
import blog5 from '../assets/img/blog5.png';

const blogData = {
  header: "Многое Происходит,<br>Мы Ведем об Этом Блог.",
  articles: [
    {
      id: 1,
      image: blog1,
      alt: "Основная статья блога",
      date: "Сен 26, 2021",
      title: "GPT-4 и Openai - это будущее. Давайте разберемся, как это?",
      readMoreLink: "#",
      isMain: true
    },
    {
      id: 2,
      image: blog2,
      alt: "Статья блога 2",
      date: "Сен 26, 2021",
      title: "GPT-4 и Openai - это будущее. Давайте разберемся, как это?",
      readMoreLink: "#",
      isMain: false
    },
    {
      id: 3,
      image: blog3,
      alt: "Статья блога 3",
      date: "Сен 26, 2021",
      title: "GPT-4 и Openai - это будущее. Давайте разберемся, как это?",
      readMoreLink: "#",
      isMain: false
    },
    {
      id: 4,
      image: blog4,
      alt: "Статья блога 4",
      date: "Сен 26, 2021",
      title: "GPT-4 и Openai - это будущее. Давайте разберемся, как это?",
      readMoreLink: "#",
      isMain: false
    },
    {
      id: 5,
      image: blog5,
      alt: "Статья блога 5",
      date: "Сен 26, 2021",
      title: "GPT-4 и Openai - это будущее. Давайте разберемся, как это?",
      readMoreLink: "#",
      isMain: false
    }
  ]
};

export default blogData;