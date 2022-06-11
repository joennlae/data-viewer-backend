import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/*
CREATE TABLE IF NOT EXISTS "parametersweep" (
"index" INTEGER,
  "C" INTEGER,
  "H_size" INTEGER,
  "K" INTEGER,
  "L_size" INTEGER,
  "encoding_algorithm" INTEGER,
  "learned_d" INTEGER,
  "learned_m" INTEGER,
  "learned_n" INTEGER,
  "mae" REAL,
  "mape" REAL,
  "mse" REAL,
  "rows" INTEGER,
  "scaled_error" REAL,
  "scaled_shift" REAL,
  "stored_array_size" INTEGER,
  "top_1_accuracy" REAL,
  "top_5_accuracy" REAL,
  "total_time" REAL,
  "hue_string" TEXT,
  "test_name" TEXT,
  "layer_name_canonical" TEXT,
  "layer_name" TEXT,
  "row_name" TEXT,
  "col_name" TEXT,
  "top_1_accuracy_100" REAL
);
*/
@Entity("parametersweep")
export class ParameterSweepEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    index: number;

    @Column()
    C: number;

    @Column()
    H_size: number;

    @Column()
    K: number;

    @Column()
    L_size: number;

    @Column()
    encoding_algorithm: number;

    @Column()
    learned_d: number;

    @Column()
    learned_m: number;

    @Column()
    learned_n: number;

    @Column()
    mae: number;

    @Column()
    mape: number;

    @Column()
    mse: number;

    @Column()
    rows: number;

    @Column()
    scaled_error: number;

    @Column()
    scaled_shift: number;

    @Column()
    top_1_accuracy: number;

    @Column()
    top_5_accuracy: number;

    @Column({nullable: true})
    total_time: number;

    @Column()
    hue_string: string;

    @Column()
    test_name: string;

    @Column()
    layer_name_canonical: string;

    @Column()
    layer_name: string;

    @Column()
    row_name: string;

    @Column()
    col_name: string;

    @Column()
    top_1_accuracy_100: number;
}
