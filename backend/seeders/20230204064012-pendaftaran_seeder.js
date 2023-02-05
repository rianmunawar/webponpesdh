// "use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pendaftaran",
      [
        {
          nama: "Jhon Adam",
          jenjang: "mak",
          nisn: 12345,
          nik: 32052911100011,
          tempat_lahir: "Jakarta",
          dob: new Date().toISOString(),
          j_kelamin: "laki-laki",
          alamat: "Jl.Jagakarsa no. 20",
          agama: "islam",
          kewarganegaraan: "wni",
          email: "jhon@mail.com",
          no_hp: 082223334455,
          asal_sekolah: "SMP Jagakarsa",
          no_ijazah: "smp-123111-ma11/VII",
          nama_ayah: "Steps Adama",
          nik_ayah: 323009991113,
          dob_ayah: 1978,
          pend_ayah: "s3",
          pek_ayah: "pns/tni/poli",
          peng_ayah: "5juta-20juta",
          disabilitas_ayah: "",
          nama_ibu: "Jumsiah",
          nik_ibu: 122313413342,
          dob_ibu: 1983,
          pend_ibu: "s2",
          pek_ibu: "pns/tni/polri",
          peng_ibu: "5juta-20juta",
          disabilitas_ibu: "",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pendaftaran", null, {});
  },
};
