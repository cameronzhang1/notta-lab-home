const posts = [
  {
    id: 0,
    title: "Transcriptomic classes of BCR-ABL1 lymphoblastic leukemia",
    href: "https://www.nature.com/articles/s41588-023-01429-4",
    description: "Kim, J.C., Chan-Seng-Yue, M., Ge, S. et al. Nat Genetics (2023)",
    date: "June 19, 2023",
    datetime: "2023-06-19",
  },
  {
    id: 1,
    title: "Clinical and genomic characterisation of mismatch repair deficient pancreatic adenocarcinoma",
    href: "https://gut.bmj.com/content/70/10/1894",
    description: "Grant RC, Denroche R, Jang GH, et al. Gut (2021)",
    date: "September 08, 2021",
    datetime: "2021-09-08",
  },
  {
    id: 2,
    title:
      "GATA6 Expression Distinguishes Classical and Basal-like Subtypes in Advanced Pancreatic Cancer",
    href: "https://aacrjournals.org/clincancerres/article/26/18/4901/9541/GATA6-Expression-Distinguishes-Classical-and-Basal",
    description: "O’Kane GM et al. Clin Cancer Research (2020)",
    date: "Sept 15, 2020",
    datetime: "2020-09-15",
  },
  {
    id: 3,
    title:
      "Transcription phenotypes of pancreatic cancer are driven by genomic events during tumor evolution",
    href: "https://www.nature.com/articles/s41588-019-0566-9",
    description: "Chan-Seng-Yue M, Kim JC, et al. Nat Genetics (2020)",
    date: "Jan 13, 2020",
    datetime: "2020-01-13",
  },
  {
    id: 4,
    title: "Morphological classification of pancreatic ductal adenocarcinoma that predicts molecular subtypes and correlates with clinical outcome",
    href: "https://gut.bmj.com/content/69/2/317.long",
    description: "Kim JC et al. Leukemia (2020)",
    date: "Jan 07, 2020",
    datetime: "2020-01-07",
  },
  {
    id: 5,
    title: "Cryptic genomic lesions in adverse-risk acute myeloid leukemia identified by integrated whole genome and transcriptome sequencing",
    href: "https://www.nature.com/articles/s41375-019-0546-1",
    description: "Kalimuthu S et al. Gut (2019)",
    date: "Aug 21, 2019",
    datetime: "2019-09-21",
  },
  {
    id: 6,
    title: "Organoid Profiling Identifies Common Responders to Chemotherapy in Pancreatic Cancer",
    href: "https://cancerdiscovery.aacrjournals.org/content/8/9/1112.long",
    description: "Tiriac H et al. Cancer Discovery (2018)",
    date: "Sept 1, 2018",
    datetime: "2018-09-01",
  },
  {
    id: 7,
    title: "Genomics-Driven Precision Medicine for Advanced Pancreatic Cancer: Early Results from the COMPASS Trial",
    href: "https://clincancerres.aacrjournals.org/content/24/6/1344.long",
    description: "Aung KL. et al. Clin Cancer Research (2018)",
    date: "Mar 15, 2018",
    datetime: "2018-03-15",
  },
  {
    id: 8,
    title: "A genetic roadmap of pancreatic cancer: still evolving",
    href: "https://gut.bmj.com/content/66/12/2170.long",
    description: "Notta F. et al. Gut (2017)",
    date: "Nov 10, 2017",
    datetime: "2017-11-10",
  },
  {
    id: 9,
    title: "A renewed model of pancreatic cancer evolution based on genomic rearrangement patterns",
    href: "https://www.nature.com/articles/nature19823",
    description: "Notta F. et al. Science (2016)",
    date: "Oct 12, 2016",
    datetime: "2016-10-12",
  },
  {
    id: 10,
    title: "Distinct routes of lineage development reshape the humanblood hierarchy across ontogeny",
    href: "https://science.sciencemag.org/content/351/6269/aab2116.long",
    description: "Notta F. et al. Science (2016)",
    date: "Jan 8, 2016",
    datetime: "2016-01-08",
  },
  {
    id: 11,
    title: "Isolation of single human hematopoietic stem cells capable of long-term multilineage engraftment",
    href: "https://www.science.org/doi/10.1126/science.1201219",
    desc: "Faiyaz Notta et al. Science (2011)",
    date: "July 8, 2011",
    datetime: "2011-07-08",
  },
  {
    id: 12,
    title: "Revised map of the human progenitor hierarchy shows the origin of macrophages and dendritic cells in early lymphoid development",
    href: "https://www.nature.com/articles/ni.1889",
    description: "Doulatov, S., Notta, F., Eppert, K. et al. Nat Immunol (2010)",
    date: "June 13, 2010",
    datetime: "2010-06-13"
  },
  {
    id: 13,
    title: "Engraftment of human hematopoietic stem cells is more efficient in female NOD/SCID/IL-2Rgc-null recipients",
    href: "https://ashpublications.org/blood/article/115/18/3704/27305/Engraftment-of-human-hematopoietic-stem-cells-is",
    description: "Faiyaz Notta, Sergei Doulatov, John E. Dick, Blood (2010)",
    date: "May 6, 2010",
    datetime: "2010-05-06"
  },
  {
    id: 14,
    title: "Evolution of human BCR-ABL1 lymphoblastic leukaemia-initiating cells",
    href: "https://www.nature.com/articles/nature09733",
    description: "Notta F. et al Nature (2011)",
    date: "Jan 19, 2011",
    datetime: "2011-01-19",
  },
  // More posts...
];

export default function Publications() {
  return (
    <div className="py-4 sm:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between hover:shadow-lg p-2 rounded-xl my-2"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a
                    href={post.href}
                    className="hover-underline-animation font-medium"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
