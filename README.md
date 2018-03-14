# aplikasi pembelian pulsa

---------------------------
## Flow aplikasi :
1. Di halaman login, user menginputkan username dan password. Klik tombol “Login” lalu
akses API Login
Jika login sukses, maka muncul halaman “Transaction”
2. Combobox “Operator” berisi nama-nama Operator.
Untuk mendapatkan data Operator maka akses API Operator
3. Combobox “Pulsa” berisi nominal-nominal Pulsa berdasarkan Operator yang dipilih.
Jadi Combobox “Pulsa” akan terisi jika User sudah memilih data di Combobox “Operator”
Untuk mendapatkan data Pulsa maka akses API Voucher
4. Label “Harga” akan di set setelah User memilih Combobox “Pulsa”.
Data harga diakses di API Voucher
5. Klik tombol “Save Transaction”, maka aplikasi akan mengakses API Transaction untuk
menyimpan data transaksi.

Structure table:
* Transaction:
  - attribute id ber-type integer
  - attribute phone_number ber-type integer
  - attribute operator ber-type string
  - attribute voucher ber-type integer
  - attribute userId ber-type string

* Operator:
  - attribute id ber-type integer
  - attribute Nama Operator ber-type string

* Voucher:
  - attribute id ber-type integer
  - attribute harga ber-type integer

  Voucher:
    - attribute id ber-type integer
    - attribute username ber-type string
    - attribute password ber-type string
    - attribute userId ber-type integer



basic routing register dan login
route berikut  tampilkan melalui view engine ejs <br/>

|METHOD | ROUTE                   | KETERANGAN                                           |
|-------|:------------------------|:-----------------------------------------------------
|GET    | /register               | menampilkan halaman register                         |
|POST   | /register               | menginput data dan menuju akses login                |
|GET    | /login                  | menampilkan halaman login                            |
|POST   | /login                  | input data dan mengakses menuju halaman transaction  |

<br />

<br />

## Routing for Voucher
|METHOD | ROUTE                   | KETERANGAN                                          |
|-------|:------------------------|:-----------------------------------------------------
|GET    | /                       | Menampilkan halaman aplikasi online                 |
|GET    | /api/voucher            | menampilkan semua data voucher                      |
|POST   | /api/voucher/add        | menambahkan data voucher                            |    
|GET    | /api/voucher/edit/:id   | menampilkan data form untuk update voucher          |
|POST   | /api/voucher/edit/:id   | menerima data voucher berdasarkan id                |
|GET    | /api/voucher/delete/:id | menampilkan data form untuk hapus voucher           |
|POST   | /api/voucher/delete/:id | Menghapus data voucher berdasarkan id               |


<br />

<br />

## Routing for Operator
|METHOD | ROUTE                    | KETERANGAN                                           |
|-------|:------------------------ |:-----------------------------------------------------
|GET    | /api/operator            | menampilkan semua data operator                      |
|POST   | /api/operator/add        | menambahkan data operator                            |    
|GET    | /api/operator/edit/:id   | menampilkan data form untuk update operator          |
|POST   | /api/operator/edit/:id   | menerima data operator berdasarkan id                |
|GET    | /api/operator/delete/:id | menampilkan data form untuk hapus operator           |
|POST   | /api/operator/delete/:id | Menghapus data operator berdasarkan id               |

<br />

<br />

## Routing for Transaction
|METHOD | ROUTE                       | KETERANGAN                                           |
|-------|:------------------------    |:-----------------------------------------------------
|GET    | /api/transaction            | menampilkan semua data transaction                   |
|POST   | /api/transaction/add        | menambahkan data transaction                         |    
|GET    | /api/transaction/edit/:id   | menampilkan data form untuk update transaction       |
|POST   | /api/transaction/edit/:id   | menerima data transaction berdasarkan id             |
|GET    | /api/transaction/delete/:id | menampilkan data form untuk hapus transaction        |
|POST   | /api/transaction/delete/:id | Menghapus data transaction berdasarkan id            |

<br />

<br />
