function DNAStrand(dna){
  
  let nucleotides = {'A':'T', 'T':'A', 'C':'G', 'G':'C'};
  let strand = dna.replace(/[ATCG]/g, m => nucleotides[m]);

  return(strand);
   
}
