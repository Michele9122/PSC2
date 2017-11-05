﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PSC.Models
{
    public class Subject
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MateriaId { get; set; }
        public string Nome { get; set; }
        public int Crediti { get; set; }
        public int Semestre { get; set; }
        public int CorsoId { get; set; } 
        public Course Course { get; set; }
        public Teacher Teacher { get; set; }
    }
}
