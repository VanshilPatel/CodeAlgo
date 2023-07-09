import React from 'react';
import { Box, Heading, Text, VStack, Link, Grid, GridItem } from '@chakra-ui/react';

const Discuss = ()=>{
  const blogPosts = [
    {
      id: 1,
      title: 'Cracking the Machine Coding Interview: Tips and Strategies',
      date: 'October 1, 2021',
      description:
        'Learn valuable tips and strategies to ace coding interviews at top tech companies. We discuss common interview formats, important concepts to master, and effective problem-solving techniques.',
      link: 'https://www.mygreatlearning.com/blog/tips-to-crack-a-coding-interview/',
    },
    {
      id: 2,
      title: '5 Must-Know JavaScript Algorithms for Coding Interviews',
      date: 'October 5, 2021',
      description:
        'Explore five essential JavaScript algorithms frequently asked in coding interviews. We provide detailed explanations and example implementations, along with time and space complexity analysis.',
      link: 'https://javascript.plainenglish.io/top-5-javascript-algorithms-that-you-should-solve-92c34448fbbb',
    },
    {
      id: 3,
      title: 'Python vs. Java: Choosing the Right Language for Coding Interviews',
      date: 'January 10, 2022',
      description:
        'Compare Python and Java for coding interviews. We examine their strengths, weaknesses, and suitability for various interview scenarios. Make an informed choice and maximize your chances of success.',
      link: 'https://www.quora.com/Which-language-should-I-use-for-my-interview-Java-or-Python-One-says-Java-is-better-because-it-is-more-useful-and-interviewers-prefer-that-Another-says-in-Python-you-will-make-fewer-mistakes-on-the-white-board-and-can-focus-on-problem-solving',
    },
    {
      id: 4,
      title: 'How to Solve Dynamic Programming Problems in C++',
      date: 'March 15, 2022',
      description:
        'Master dynamic programming problem-solving techniques in C++. We cover the fundamental concepts, provide step-by-step approaches, and present efficient C++ code solutions for common DP problems.',
      link: 'https://www.geeksforgeeks.org/dynamic-programming/',
    },
    {
      id: 5,
      title: 'Top 10 Data Structures and Algorithms Questions for Practice',
      date: 'October 20, 2022',
      description:
        'Practice your coding skills with our carefully curated collection of the top 10 data structures and algorithms questions. We provide problem statements, multiple solutions, and explanations.',
      link: 'https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/',
    },
    {
      id: 6,
      title: 'Debugging Tips and Techniques: A Comprehensive Guide',
      date: 'February 25, 2023',
      description:
        'Enhance your debugging skills with our comprehensive guide. Learn effective strategies, tools, and best practices to identify and fix bugs in your code like a pro.',
      link: 'https://www.almabetter.com/bytes/articles/debugging-techniques',
    },
    {
        id: 7,
        title: 'Frontend Development Best Practices: Essential Tips and Tricks',
        date: 'April 30, 2023',
        description:
          'Discover frontend development best practices to create high-quality and performant web applications. We share essential tips and tricks for efficient HTML, CSS, and JavaScript coding.',
        link: 'https://www.toptal.com/front-end/front-end-design-principles',
      },
      {
        id: 8,
        title: 'Mastering Algorithms: A Comprehensive Guide for Software Engineers',
        date: 'July 5, 2023',
        description:
          'Dive deep into the world of algorithms and algorithmic problem-solving. We provide a comprehensive guide to understand different algorithmic techniques and their applications.',
        link: 'https://medium.com/@iammanolov98/mastering-time-and-space-complexity-in-algorithms-a-comprehensive-guide-for-programmers-8d8c7cb1dfee',
      },
  ];

  return (
    <Box p={8}>
      <VStack spacing={4} alignItems="flex-start">
        <Heading as="h1" size="xl">
          Welcome to the Blog Page!
        </Heading>
        <Text fontSize="lg">
          Here you will find interesting articles and resources related to coding interviews, coding questions, and development.
        </Text>
        <Text fontSize="lg">
          Check out the following blog posts:
        </Text>
      </VStack>

      <Grid   templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={8} mt={8}>
        {blogPosts.map((post) => (
          <GridItem bg={'yellow.50'} key={post.id} >
            <Box p={4} borderWidth={1} borderRadius="md" shadow="md" >
              <Heading as="h2" size="lg" mb={2}>
                {post.title}
              </Heading>
              <Text fontSize="md" mb={4}>
                Published on {post.date}
              </Text>
              <Text fontSize="md">{post.description}</Text>
              <Link href={post.link} color="blue.500" fontSize="md" fontWeight="bold" mt={4}>
                Read more...
              </Link>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Discuss;
