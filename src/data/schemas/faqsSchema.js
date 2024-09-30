export const getFaqPageSchema = (faqs, publisher, generalBusinessData) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "about": generalBusinessData.faqPageAbout,
  "audience": {
    "@type": "Audience",
    "audienceType": "General"
  },
  "creativeWorkStatus": "Published",
  "educationalUse": "Information",
  "keywords": generalBusinessData.faqPageKeywords,
  "learningResourceType": "FAQ",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer_type === 'list' ? faq.answer_content.join(', ') : faq.answer_content,
      "upvoteCount": faq.upvoteCount || 0,
      "url": faq.url,
      "datePublished": faq.created_at,
      "dateModified": faq.updated_at,
      "author": {
        "@type": "Person",
        "name": faq.author || "Admin"
      },
      "editor": faq.editor || "Admin"
    },
    "mentions": faq.mentions || []
  })),
  "publisher": publisher
});